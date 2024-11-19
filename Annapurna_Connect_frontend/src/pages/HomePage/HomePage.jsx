import styles from "./homePage.module.css";
import { BiSearch } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";

import NGOCard from "../../components/NGOCard";
import BottomNavbar from "../../components/BottomNavbar";

import { Link } from "react-router-dom";
import { useState,useEffect,useRef } from "react";



const HomePage = (props) => {
  const { ngoData,campaignData,totalmeals,totalDonations,volunteerTime } = props;
  const[searchNgo,setSearchNgo]=useState([]);
  const [isSearchTabVisible, setIsSearchTabVisible] = useState(false);
  const timeoutRef = useRef(null);
  const handleFocus = () => {
    setIsSearchTabVisible(true);
  };

  const handleBlur = () => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsSearchTabVisible(false);
    }, 300); 
  };

 const handleSearch=(e)=>{
const value=e.target.value;
  if(value===""){
    setSearchNgo([]);
  }
  else{
  const ngos=ngoData.filter((item)=>{
    if(item.NGOName.toLowerCase().includes(value.toLowerCase())){
      return item;
    }
    else{return null;}
  })
  const campaigns=campaignData.filter((item)=>{
    if(item.title.toLowerCase().includes(value.toLowerCase())){
      return item;
    }
    else{return null;}
  })
  setSearchNgo([...ngos,...campaigns]);
}
 }

 useEffect(() => {
  return () => {
    clearTimeout(timeoutRef.current);
  };
}, []);


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
              onChange={handleSearch}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          {isSearchTabVisible && (<div className={styles.searchresults}>
        {searchNgo.length > 0 ? (
          searchNgo.map((result) => (
            <Link to={result.NGOName? `/all/${result.id}`: `/campaigns/${result.id}`} key={result._id}>
            <div key={result._id} className={styles.resultcard}>
              <img src={result.image} alt={result.NGOName} />
              <div className={styles.info}>
                <h3>{result.NGOName  || result.title}</h3>
                <p>{result.NGOName?"NGO":"Campaign"}</p>
              </div>
              
            </div>
            </Link>
          ))
        ) : (
          <div className={styles.emptystate}>
            <p>No results found. Try another search or refine filters.</p>
          </div>
        )}
      </div>)}
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
            <NGOCard data={ngoData[0]} />
          </Link>
          <Link to="all/2">
            <NGOCard data={ngoData[2]} />
          </Link>
          <Link to="all/7">
            <NGOCard data={ngoData[7]} />
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
              <img className={styles.nearby_image} src={ngoData[0].image} alt="campaignImages[0]" />
            </Link>
            <Link to="all/1">
              <img className={styles.nearby_image} src={ngoData[1].image} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
//data[0].image  1   data[0] 2  7