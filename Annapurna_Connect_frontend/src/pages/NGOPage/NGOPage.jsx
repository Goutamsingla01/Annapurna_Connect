import styles from "./ngoPage.module.css";
import React from 'react';
import { useHistory } from 'react-router-dom';

import { HiBadgeCheck } from "react-icons/hi";

import BottomNavbar from "../../components/BottomNavbar";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";
import { useParams } from "react-router";

const NGOPage = (props) => {
  const { data,handleInput } = props;
  const { id } = useParams();
  const history = useHistory();
  const ngoData = data[parseInt(id)];
  const handleClick=(e)=>{
    handleInput(e);
    history.push('/donationType');

  }
  return (
    <>
      <DonateFoodNavbar link="/all" />
      <BottomNavbar />
      <div className={styles.main}>
        <div className={styles.ngo_details}>
          <div className={styles.image_section}>
            <img src={ngoData.image} alt="ngoImage" loading="lazy"/>
            <div className={styles.title}>
              <p>{ngoData.NGOName}</p>
              <HiBadgeCheck className={styles.icon} />
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.item}>
              <p className={styles.detail}>{ngoData.reviews}</p>
              
              <p className={styles.para}>Reviews</p>
            </div>
            <div className={styles.item}>
              <p className={styles.detail}>{ngoData.totalFeeds}+</p>
              <p className={styles.para}>Total Feeds</p>
            </div>
            <div className={styles.item}>
              <p className={styles.detail}>{ngoData.totalCampaigns}+</p>
              <p className={styles.para}>Total Campaigns</p>
            </div>
            <div className={styles.item}>
              <p className={styles.detail}>{ngoData.totalVolunteers}+</p>
              <p className={styles.para}>Total Volunteers</p>
            </div>
          </div>
          <div className={styles.button}>
            <button  className={styles.custombutton} onClick={handleClick} name="donateTo" value={ngoData.NGOName}>Donate Now</button>
          </div>
        </div>

        <div className={styles.about}>
          <div className={styles.about_top}>
            <p>About</p>
            <p>Events</p>
            <p>Reviews</p>
          </div>
          <div className={styles.about_bottom}>
            <p>{ngoData.about}</p>
            <div className={styles.buttons}>
              <button onClick={()=>window.open(`https://wa.me/919414952680?text=I'm%20interested%20in%20your%20car%20for%20sale`,'_blank')}>Chat</button>
              <button onClick={()=>window.open('https://maps.app.goo.gl/eqGBDi7pBFZeB9TP8', '_blank')} >Address</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NGOPage;
