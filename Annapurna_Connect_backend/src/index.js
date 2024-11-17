const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const multer = require('multer');

app.use(express.json());

const session = require("express-session");

if (process.env.IS_RENDER==="true") {
  console.log("hi"+process.env.IS_RENDER);
  app.set("trust proxy", 1);
  app.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: true,
      cookie: {
        sameSite: "none",
        secure: true,
        domain: process.env.DOMAIN,
        path: "/",
        httpOnly: true,
      },
    })
  );
} else {
  const redis = require("redis");
  const RedisStore = require("connect-redis")(session);
  const redisClient = redis.createClient();

  app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      secret: process.env.SECRET_KEY|| 'fallback-secret-key',
      resave: false,
      saveUninitialized: true,
    })
  );
}

const cors = require("cors");
app.use(cors({ origin: process.env.FRONTEND_URL , credentials: true }));

const User = require("./models/user.model");
const userController = require("./controllers/user.controller");
const ngoController = require("./controllers/ngo.controller");
const campaignController = require("./controllers/campaign.controller");
const Donation = require("./models/Donation.model")
const Volunteer = require("./models/Volunteer.model")

const passport = require("./configs/passport");
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const newUser = await User.findById(id).lean().exec();
  done(null, newUser);
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
  }),
  function (req, res) {
    res.redirect(process.env.FRONTEND_URL);
  }
);

const isAutheticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send({});
  }
};

app.get("/test", isAutheticated, (req, res) => {
  res.send({ user: req.user || null });
});

app.use("/user", isAutheticated, userController);

app.use("/ngos", ngoController);
app.use("/campaigns", campaignController);

function fileFilter(req, file, cb) {
  if (file.mimetype === 'image/jpeg' // accept .jpeg
    || file.mimetype === 'image/png' // or .png files only
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}
const upload = multer({
  limits: {
    fileSize: 1024 * 1024 // limit the size of uploaded file to 1MB
  },
  fileFilter: fileFilter
})

app.put('/updateuser',isAutheticated,upload.single('image'), async (req, res) => {
  try {
    const userId = req.user._id;
    const profilepic=req.file?req.file.buffer:undefined;
    const updateData = {
      email: req.body.email,  
      name: req.body.name,    
    };

    if (profilepic) {
      updateData.image = profilepic;
    } 
    const updatedUser = await User.findByIdAndUpdate (userId,updateData,{new:true});
  if (!updatedUser) {
    return res.status(404).json({ message: "User not found" });
}
    res.status(200).json({ message: 'Data submitted successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ message: 'Error submitting data' });
  }
});


app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      res.clearCookie("connect.sid"); // Ensure the session cookie is cleared
      res.status(200).json({ message: "Logged out successfully" });
    });
  });
});
const getUserIdFromToken = (req) => {
  // Example: Parse user ID from token (actual implementation will depend on your auth system)
  return req.user ? req.user.id : null;
};

app.get('/donations',isAutheticated, async (req, res) => {
  
  try {
    // Fetch donations only for the logged-in user
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const userId = req.user._id
    const donations = await Donation.find({ userId  });
    res.status(200).json(donations);
  } catch (error) {
    console.error('Error fetching donations:', error);
    res.status(500).json({ message: 'Error fetching donations' });
  }
});

app.post('/submit-form',isAutheticated, async (req, res) => {
  console.log('req.user:', req.user);
  try {
    const newDonation = new Donation({
      userId: req.user._id, // Assuming _id is the user's ID
      address: req.body.address,
      bestBefore: req.body.bestBefore,
      donateDate: req.body.donateDate,
      donateTime: req.body.donateTime,
      meal: req.body.meal,
      phoneNo: req.body.phoneNo,
      quantity: req.body.quantity,
      type: req.body.type,
      donateTo: req.body.donateTo
  });

  await newDonation.save();  // Save to MongoDB
    res.status(200).json({ message: 'Data submitted successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ message: 'Error submitting data' });
  }
});

app.get('/volunteers',isAutheticated, async (req, res) => {
  
  try {
    // Fetch donations only for the logged-in user
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const userId = req.user._id
    const volunteers = await Volunteer.find({ userId  });
    res.status(200).json(volunteers);
  } catch (error) {
    console.error('Error fetching donations:', error);
    res.status(500).json({ message: 'Error fetching donations' });
  }
});

app.post('/volunteer-form',isAutheticated, async (req, res) => {
  console.log('req.user:', req.user);
  try {
    const newVolunteer = new Volunteer({
      userId: req.user._id, // Assuming _id is the user's ID
      address: req.body.address,
      devotedTime: req.body.devotedTime,
      volunteerDate: req.body.volunteerDate,
      volunteerTime: req.body.volunteerTime,
      phoneNo: req.body.phoneNo,
      donateTo: req.body.donateTo
  });

  await newVolunteer.save();  // Save to MongoDB
    res.status(200).json({ message: 'Data submitted successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ message: 'Error submitting data' });
  }
});

const JWT_SECRET = 'your_jwt_secret_key';

app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ message: 'Email already exists.' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();

      res.status(201).json({ message: 'Signup successful! You can now log in.' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error. Please try again.' });
  }
});

app.post(
  "/auth/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login/failure",
  }),
  function (req, res) {
    res.status(200).json({ message: 'login successful!' })
  }
);

app.get("/auth/login/failure", (req, res) => {
  res.status(401).json({ message: "Invalid email or password" });
});




module.exports = app;
