require("dotenv").config();
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

function App() {
  const [ngoData, setData] = useState(null);

  const getNgoData = async () => {
    try {
      const { data } = await axios.get(`${process.env.BACKEND_URL}/ngos`);
      setData([...data]);
    } catch (err) {
      console.log(err);
    }
  };

  const [campaignData, setCampaignData] = useState(null);

  const getCampaignData = async () => {
    try {
      const { data } = await axios.get(`${process.env.BACKEND_URL}/campaigns`);
      setCampaignData([...data]);
    } catch (err) {
      console.log(err);
    }
  };

  const [userData, setUser] = useState({ isFetched: false, user: null });

  const getUser = async () => {
    try {
      const { data } = await axios.get(`${process.env.BACKEND_URL}/user`, {
        withCredentials: true,
      });
      setUser({ isFetched: true, user: data.user });
    } catch (err) {
      setUser({ isFetched: true, user: null });
    }
  };

  //donation history
  const [donations, setDonations] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalmeals, setTotalMeals] = useState(0);
  const [volunteerTime, setvolunteerTime] = useState(0);

  const fetchDonations = async () => {
    try {
      const response = await axios.get(`${process.env.BACKEND_URL}/donations`, {
        withCredentials: true,
      });
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
      const response = await axios.get(`${process.env.BACKEND_URL}/volunteers`, {
        withCredentials: true,
      });
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

  useEffect(() => {
    getNgoData();
    getCampaignData();
    getUser();
    fetchDonations();
    fetchVolunteers();
  }, []);

  const [isLoad, setLoad] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoad(false);
    }, 3000);
  }, []);

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
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/submit-form`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(foodData),
      });

      await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("Error submitting form.");
    }
  };
  const [isModalOpen, setModalState] = useState(false);
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
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/volunteer-form`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(volunteerData),
      });

      await response.json();
      if (response.ok) {
        setModalState((state) => !state);
        alert("Form submitted successfully!");
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("Error submitting form.");
    }
  };

  const logout = async () => {
    await axios.get(`${process.env.BACKEND_URL}/logout`, {
      withCredentials: true,
    });
    setUser({ user: null, isFetched: true });
  };

  if (!userData.isFetched) {
    return <p>Loading...</p>;
  }

  if (userData.isFetched && !userData.user) {
    return <div className="App">{isLoad ? <FirstPage /> : <Signup />}</div>;
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

        <Route exact path="/">
          {ngoData && campaignData ? (
            <HomePage
              data={ngoData}
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
              handleVolunteerInput={handleVolunteerInput}
            />
          ) : null}
        </Route>
        <Route path="/campaigns/:id" exact>
          {campaignData ? <Campaign campaignData={campaignData} /> : null}
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
          />
        </Route>

        <Route path="/chooseRole" exact>
          <ChooseRole />
        </Route>

        <Route path="/donationType" exact>
          <DonationSelection />
        </Route>

        <Route path="/confirmFoodDetails" exact>
          <ConfirmFoodDetails
            foodData={foodData}
            handleFormSubmit={handleFormSubmit}
            handleInput={handleInput}
          />
        </Route>
        <Route path="/volunteerDetails" exact>
          <VolunteerDetails
            volunteerData={volunteerData}
            handleVolunteerForm={handleVolunteerForm}
            handleVolunteerInput={handleVolunteerInput}
            isModalOpen={isModalOpen}
            setModalState={setModalState}
          />
        </Route>

        <Route path="/hungerSpot" exact>
          <HungerSpot />
        </Route>
      </Switch>
    </div>
  );
}
//confirmfood  form
export default App;
