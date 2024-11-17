import styles from "./profile.module.css";
import { FiSettings, FiHelpCircle, FiCalendar, FiClock } from "react-icons/fi";
import BottomNavbar from "../../components/BottomNavbar";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Profile = (props) => {
  const { user, logout } = props;
  const [imageSrc, setImageSrc] = useState(null);

  // const imageSrc= !user.image?user.profilePic :`data:user.image/jpeg;base64,${user.image}`;
  useEffect(() => {
    if (user) {
      // Logic to decide which image source to use
      const image = user.image 
        ? `data:image/jpeg;base64,${user.image}`  // If user has a custom image
        : user.profilePic;  // If not, use the default profile picture

      setImageSrc(image);  // Set the image source to the state
    }
  }, [user]); 

  return (
    <>
      <BottomNavbar />
      <div className={styles.main}>
        <h1>Profile</h1>
        <div className={styles.upper}>
          <div className={styles.addImage}>
            <img src={imageSrc} alt="" />
          </div>
          <div className={styles.title}>
            <h2>Hello {user.name}!</h2>
            <Link to="/edit">
            <p className={styles.edit}>Edit</p>
            </Link>
          </div>
        </div>
        <div className={styles.lower}>
        <Link to="/donationHistory">
          <div className={styles.tabs}>
            <FiClock className={styles.icon} />
            <p>Donation History</p>
          </div>
        </Link>
        <Link to="/donationType">
          <div className={styles.tabs}>
            <FiCalendar className={styles.icon} />
            <p>Schedule Donation</p>
          </div>
          </Link>
        <Link to="/faq">
          <div className={styles.tabs}>
            <FiHelpCircle className={styles.icon} />
            <p>FAQs</p>
          </div>
        </Link>
        
          <div className={styles.tabs}>
            <FiSettings className={styles.icon} />
            <p>Settings</p>
          </div>
        </div>

        <div>
          <button onClick={logout} className={styles.signup_btn}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
