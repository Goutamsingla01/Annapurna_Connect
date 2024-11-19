import styles from "./donationSelection.module.css";
import BottomNavbar from "../../components/BottomNavbar";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";
import { Link } from "react-router-dom";

const DonationSelection = () => {
  return (
    <>
      <DonateFoodNavbar link="/"/>
      <BottomNavbar />

      <div className={styles.main}>
        <h1>Choose what you want to Donate</h1>
        <div className={styles.image_section}>
          <Link to="/category">
          
            <img src="https://i.ibb.co/nRgrDJw/donatefood.jpg" alt="Donate Food" className={styles.image} />
          </Link>
          <Link to="/volunteerDetails">
          
            <img src="https://i.ibb.co/j5zFGsj/volunteertime.jpg" alt="Volunteer Time" className={styles.image}/>
          </Link>
        </div>
      </div>

    </>
  );
};

export default DonationSelection;
