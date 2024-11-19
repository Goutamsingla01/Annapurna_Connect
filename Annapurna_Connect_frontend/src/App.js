import "./App.css";
import HomePage from "./pages/HomePage";
import AllNGOS from "./pages/AllNGOS";
import NGOPage from "./pages/NGOPage";
import FoodDetails from "./pages/FoodDetails";
import CategorySelection from "./pages/CategorySelection";
import ChooseRole from "./pages/ChooseYourRole";
import DeliverSelection from "./pages/DeliverSelection";
import DonationSelection from "./pages/DonationSelection";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup";
import FirstPage from "./pages/FirstPage";

import { Switch, Route } from "react-router-dom";
import ConfirmFoodDetails from "./pages/ConfirmFoodDetails";
import { useState, useEffect } from "react";

import axios from "axios";
import DonationHistory from "./pages/DonationHistory/DonationHistory";
import Campaign from "./pages/Campaign/Campaign";
import AllCampaigns from "./pages/AllCampaigns";
import VolunteerDetails from "./pages/VolunteerDetails";
import HungerSpot from "./pages/HungerSpot/HungerSpot";
import FAQ from "./pages/FAQ/FAQ";
import Edit from "./pages/Edit/Edit";
import Login from "./pages/Login/Login";
import Aboutus from "./pages/Aboutus/Aboutus";
import TandC from "./pages/T&C/TandC";

function App() {
  const [ngoData, setData] = useState(null);

  const getNgoData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/ngos`
      );
      setData([...data]);
    } catch (err) {
      console.log(err);
    }
  };

  const [campaignData, setCampaignData] = useState(null);

  const getCampaignData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/campaigns`
      );
      setCampaignData([...data]);
    } catch (err) {
      console.log(err);
    }
  };

  const [userData, setUser] = useState({ isFetched: false, user: null });

  const getUser = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/user`,
        {
          withCredentials: true,
        }
      );
      setUser({ isFetched: true, user: data.user });
      setShouldFetchForm(true);
    } catch (err) {
      setUser({ isFetched: true, user: null });
    }
  };

  //donation history
  const [donations, setDonations] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalmeals, setTotalMeals] = useState(0);
  const [volunteerTime, setvolunteerTime] = useState(0);

  const fetchDonations = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/donations`,
        {
          withCredentials: true,
        }
      );
      setDonations(response.data);
      const mealsTotal = response.data.reduce(
        (sum, donation) => sum + donation.quantity,
        0
      );
      setTotalMeals(mealsTotal);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const fetchVolunteers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/volunteers`,
        {
          withCredentials: true,
        }
      );
      setVolunteers(response.data);
      const volunteerTotal = response.data.reduce(
        (sum, donation) => sum + donation.devotedTime,
        0
      );
      setvolunteerTime(volunteerTotal);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const [shouldFetchUser, setShouldFetchUser] = useState(false);
  const [shouldFetchForm, setShouldFetchForm] = useState(false);
  useEffect(() => {
    getNgoData();
    getCampaignData();
    getUser();
  }, []);
  useEffect(() => {
    if (shouldFetchUser) {
      getUser();
      setShouldFetchUser(false);
    }
  }, [shouldFetchUser]);

  useEffect(() => {
    if (shouldFetchForm) {
      fetchVolunteers();
      fetchDonations();
      setShouldFetchForm(false);
    }
  }, [shouldFetchForm]);

  const [isLoad, setLoad] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoad(false);
    }, 3000);
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(true);
  //food donation form
  const [foodData, setFoodData] = useState({
    type: "",
    meal: "",
    quantity: 0,
    address: "",
    phoneNo: "",
    donateDate: "",
    donateTime: "",
    bestBefore: 0,
    donateTo: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFoodData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleFormSubmit = async () => {
    setIsSubmitted(false);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/submit-form`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(foodData),
        }
      );

      await response.json();
      setFoodData({
        type: "",
        meal: "",
        quantity: 0,
        address: "",
        phoneNo: "",
        donateDate: "",
        donateTime: "",
        bestBefore: 0,
        donateTo: "",
      });
      if (response.ok) {
        setShouldFetchForm(true);
        alert("Form submitted successfully!");
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("Error submitting form.");
    } finally {
      setIsSubmitted(true);
    }
  };
  const [isModalOpen, setModalState] = useState(false);
  // volunteer form
  const [volunteerData, setVolunteerData] = useState({
    address: "",
    phoneNo: "",
    volunteerDate: "",
    volunteerTime: "",
    devotedTime: 0,
    donateTo: "",
  });

  const handleVolunteerInput = (e) => {
    const { name, value } = e.target;
    setVolunteerData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleVolunteerForm = async () => {
    setIsSubmitted(false);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/volunteer-form`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(volunteerData),
        }
      );
      await response.json();
      setVolunteerData({
        address: "",
        phoneNo: "",
        volunteerDate: "",
        volunteerTime: "",
        devotedTime: 0,
        donateTo: "",
      });
      if (response.ok) {
        setShouldFetchForm(true);
        setModalState((state) => !state);
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("Error submitting form.");
    } finally {
      setIsSubmitted(true);
    }
  };

  //edit user
  const [newUser, setNewUser] = useState({
    name: "",
    image: "",
  });
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewUser({ ...newUser, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    try {
      const formData = new FormData();
      formData.append("email", userData.user.email);
      newUser.name
        ? formData.append("name", newUser.name)
        : formData.append("name", userData.user.name);
      if (newUser.image) {
        formData.append("image", newUser.image);
      }

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/updateuser`,
        {
          method: "PUT",
          credentials: "include",
          body: formData,
        }
      );
      await response.json();
      setNewUser({
        name: "",
        image: "",
      });
      if (response.ok) {
        alert("Form submitted successfully!");
        setShouldFetchUser(true);
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("Error submitting form.");
    } finally {
      setIsSubmitted(true);
    }
  };

  const logout = async () => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
      withCredentials: true,
    });
    setUser({ user: null, isFetched: true });
  };

  if (!userData.isFetched) {
    return <p>Loading...</p>;
  }

  if (userData.isFetched && !userData.user) {
    return (
      <div className="App">
        {isLoad ? (
          <FirstPage />
        ) : (
          <>
            <Switch>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route path="*">
                <Login />
              </Route>
            </Switch>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/profile">
          <Profile user={userData.user} logout={logout} />
        </Route>
        <Route exact path="/faq">
          <FAQ />
        </Route>
        <Route exact path="/t&c">
          <TandC />
        </Route>

        <Route exact path="/edit">
          <Edit
            user={userData.user}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handlePhoto={handlePhoto}
            isSubmitted={isSubmitted}
          />
        </Route>
        <Route path="/aboutus" exact>
          <Aboutus />
        </Route>

        <Route exact path="/">
          {ngoData && campaignData ? (
            <HomePage
              ngoData={ngoData}
              campaignData={campaignData}
              totalmeals={totalmeals}
              totalDonations={donations.length}
              volunteerTime={volunteerTime}
            />
          ) : null}
        </Route>
        <Route exact path="/donationHistory">
          <DonationHistory
            donations={donations}
            volunteers={volunteers}
            loading={loading}
            error={error}
          />
        </Route>

        <Route path="/category" exact>
          <CategorySelection />
        </Route>
        <Route path="/campaigns" exact>
          {campaignData ? (
            <AllCampaigns
              campaignData={campaignData}
              
            />
          ) : null}
        </Route>
        <Route path="/campaigns/:id" exact>
          {campaignData ? <Campaign campaignData={campaignData} handleVolunteerInput={handleVolunteerInput}/> : null}
        </Route>

        <Route path="/all" exact>
          {ngoData ? <AllNGOS data={ngoData} /> : null}
        </Route>

        <Route path="/all/:id" exact>
          {ngoData ? (
            <NGOPage data={ngoData} handleInput={handleInput} />
          ) : null}
        </Route>

        <Route path="/foodDetails" exact>
          <FoodDetails handleInput={handleInput} />
        </Route>

        <Route path="/delivery" exact>
          <DeliverSelection
            foodData={foodData}
            handleFormSubmit={handleFormSubmit}
            isSubmitted={isSubmitted}
          />
        </Route>

        <Route path="/chooseRole" exact>
          <ChooseRole />
        </Route>

        <Route path="/donationType" exact>
          <DonationSelection />
        </Route>

        <Route path="/confirmFoodDetails" exact>
          <ConfirmFoodDetails foodData={foodData} handleInput={handleInput} />
        </Route>
        <Route path="/volunteerDetails" exact>
          <VolunteerDetails
            volunteerData={volunteerData}
            handleVolunteerForm={handleVolunteerForm}
            handleVolunteerInput={handleVolunteerInput}
            isModalOpen={isModalOpen}
            setModalState={setModalState}
            isSubmitted={isSubmitted}
          />
        </Route>

        <Route path="/hungerSpot" exact>
          <HungerSpot />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
