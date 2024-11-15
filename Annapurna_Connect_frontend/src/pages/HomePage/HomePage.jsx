import styles from "./homePage.module.css";
import { BiSearch } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";

import NGOCard from "../../components/NGOCard";
import BottomNavbar from "../../components/BottomNavbar";

import { Link } from "react-router-dom";



const HomePage = (props) => {
  const { data,campaignData,totalmeals,totalDonations,volunteerTime } = props;
  return (
    <>
      <BottomNavbar />
      <div className={styles.main}>
        <div className={styles.main_top}>
          <div className={styles.search_input}>
            <BiSearch className={styles.search_icon} />
            <input
              className={styles.input}
              type="text"
              placeholder="Search for NGO or campaign"
            />
          </div>
        </div>

        <div className={styles.head}>
          <center >
            <h2 className="dm-serif-display-regular">Your Contributions</h2>
            <p className="dm-serif-display-regular-italic">A Taste of the Difference You’re Making!</p></center>
          <div className={styles.headrow}>
            <div className={styles.totalDonations}>Total <br/>Donations <p className={styles.boxNum}>{totalDonations}</p></div>
            <div className={styles.meals}>Overall Meals <br/> Served <p className={styles.boxNum}> {totalmeals} </p></div>
            </div>
            <div className={styles.headrow}>
            <div className={styles.meals}>Volunteer <br/> Hours <p className={styles.boxNum}> {volunteerTime}</p></div>
            </div>
        </div>
        <div className={styles.food_required_section}>
          <div className={styles.food_required_top}>
            <h3>Food Required</h3>
            <Link to="/all">
              <div className={styles.see_all}>
                <p>See all</p>
                <RiArrowRightSLine className={styles.search_icon} />
              </div>
            </Link>
          </div>
          <Link to="all/0">
            <NGOCard data={data[0]} />
          </Link>
          <Link to="all/2">
            <NGOCard data={data[2]} />
          </Link>
          <Link to="all/7">
            <NGOCard data={data[7]} />
          </Link>
        </div>
        <div className={styles.upcoming_campaigns}>
          <div className={styles.top}>
            <h3>Our Campaigns</h3>
            <Link to="/campaigns">
            <div className={styles.see_all}>
              <p>See all</p>
              <RiArrowRightSLine className={styles.search_icon} />
            </div>
            </Link>
          </div>
          <div className={styles.round_images}>
            {campaignData.map((el) => {
              return (
                <Link to={`/campaigns/${el.id}`} key={el.id}>
                <img
                  key={el.id}
                  className={styles.campaign_image}
                  src={el.image}
                  alt="campaign_img"
                /></Link>
              );
            })}
          </div>
        </div>

        <div className={styles.food_required_section}>
          <div className={styles.food_required_top}>
            <h3>Nearby NGO </h3>
            <div className={styles.see_all}>
              <p>See all</p>
              <RiArrowRightSLine className={styles.search_icon} />
            </div>
          </div>
          <div className={styles.nearby_images}>
            <Link to="all/0">
              <img className={styles.nearby_image} src={data[0].image} alt="campaignImages[0]" />
            </Link>
            <Link to="all/1">
              <img className={styles.nearby_image} src={data[1].image} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
//data[0].image  1   data[0] 2  7