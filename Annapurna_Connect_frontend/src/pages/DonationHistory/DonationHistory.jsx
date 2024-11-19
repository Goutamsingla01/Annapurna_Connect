import styles from "./donationHistory.module.css";
import { FaRegClock } from "react-icons/fa";
import { FaBuildingNgo } from "react-icons/fa6";
import { MdOutlinePlace } from "react-icons/md";
import BottomNavbar from '../../components/BottomNavbar';
import DonateFoodNavbar from '../../components/DonateFoodNavbar';
const DonationHistory = (props) => {

  const {donations,volunteers,loading,error}=props;


  if (loading) return <p>Loading donation history...</p>;
  if (error) return <p>Error: {error}</p>;



  return (
    <>
        <BottomNavbar/>
      <DonateFoodNavbar link="/"/>
      <div className={styles.main}>
      <h1 className={styles.headline} >Donation History</h1>
      {donations.length > 0 ? (
       <div>
         {donations.map((e)=>{
            return <div className={styles.historyCard} key={e._id}>
            <div className={styles.donateDate}>{e.donateDate}</div>
            <div className={styles.donateMeal}><img src="https://img.icons8.com/?size=100&id=KfOYpP2b27kS&format=png&color=000000" className={styles.vegLogo} alt="meal"/> {e.meal} ({e.quantity})</div>
            <div className={styles.donateaddress}><img src="https://img.icons8.com/?size=100&id=3723&format=png&color=000000" className={styles.vegLogo} alt="address"/> {e.address}   ({e.donateTo? (e.donateTo):null})</div>
            <div className={styles.donateInfo}>
                {e.type==="Veg"&& <img src="https://img.icons8.com/?size=100&id=61083&format=png&color=000000" className={styles.vegLogo} alt="veg"/>}
                {e.type==="Non-veg"&& <img src="https://img.icons8.com/?size=100&id=61082&format=png&color=000000" className={styles.vegLogo} alt="non-veg"/>} {e.type}
            </div>
            
        </div>;})}
     </div>
      ) : (
        <p>No donation history available.</p>
      )}

<h1 className={styles.headline}>Volunteer History</h1>
      {volunteers.length > 0 ? (
       <div>
         {volunteers.map((e)=>{
            return <div className={styles.historyCard} key={e._id}>
            <div className={styles.donateDate}>{e.volunteerDate}</div>
            <div className={styles.donateMeal}><FaBuildingNgo className={styles.vegLogo}/>&nbsp; {e.donateTo}</div>
            <div className={styles.donateaddress}><MdOutlinePlace className={styles.vegLogo}/>&nbsp; {e.address} </div>
            <div className={styles.donateInfo}>
            <FaRegClock className={styles.vegLogo}/> &nbsp;Contributed Hours: {e.devotedTime}
            </div>
            
        </div>;})}
     </div>
      ) : (
        <p>No Volunteer history available.</p>
      )}
      </div>
    </>
  );
};

export default DonationHistory;
