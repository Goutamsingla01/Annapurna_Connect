import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
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
      <div className="main">
      <h1 className="headline">Donation History</h1>
      {donations.length > 0 ? (
       <div>
         {donations.map((e)=>{
            return <div className="historyCard">
            <div className="donateDate">{e.donateDate}</div>
            <div className="donateMeal"><img src="https://img.icons8.com/?size=100&id=KfOYpP2b27kS&format=png&color=000000" className="vegLogo"/> {e.meal} ({e.quantity})</div>
            <div className="donateaddress"><img src="https://img.icons8.com/?size=100&id=3723&format=png&color=000000" className="vegLogo"/> {e.address}   ({e.donateTo? (e.donateTo):null})</div>
            <div className="donateInfo">
                {e.type==="Veg"&& <img src="https://img.icons8.com/?size=100&id=61083&format=png&color=000000" className="vegLogo"/>}
                {e.type==="Non-veg"&& <img src="https://img.icons8.com/?size=100&id=61082&format=png&color=000000" className="vegLogo"/>} {e.type}
            </div>
            
        </div>;})}
     </div>
      ) : (
        <p>No donation history available.</p>
      )}

<h1 className="headline">Volunteer History</h1>
      {volunteers.length > 0 ? (
       <div>
         {volunteers.map((e)=>{
            return <div className="historyCard">
            <div className="donateDate">{e.volunteerDate}</div>
            <div className="donateMeal"><FaBuildingNgo className="vegLogo"/>&nbsp; {e.donateTo}</div>
            <div className="donateaddress"><MdOutlinePlace className="vegLogo"/>&nbsp; {e.address} </div>
            <div className="donateInfo">
            <FaRegClock className="vegLogo"/> &nbsp;Contributed Hours: {e.devotedTime}
            </div>
            
        </div>;})}
     </div>
      ) : (
        <p>No Volunteer history available.</p>
      )}
      </div>

      <style jsx>
        {`
          .main {
            background-color: white;
            padding: 70px 22px;
            margin: 0px 0;
          }

          .headline {
            font-weight: 600;
            font-size: 20px;
            line-height: 27px;
            text-align: center;
            margin: 30px 0px;
          }
            .head{
            display: flex;
            justify-content: space-around;
            }
            .meals{
            height:100px;
            width:130px;
            padding:10px;
            border-radius:15px;
            background-color:#fb7e00;
            color:white;
            }
            .totalDonations{
            padding:10px;
            height:100px;
            width:130px;
            border-radius:15px;
            background-color:#fb7e00;
            color:white;
            }
            .boxNum{
             color:grey;
             font-size: larger;
             font-weight: 600;
            }
             .historyCard{
             height:120px;
             width:350px;
             border:2px solid #80808047;
             border-radius:10px;
             margin:30px auto;
             padding:7px;
             }
             .donateDate{
             font-size:13px;
             text-align:end;
             color:grey;
             }
             .donateInfo{
              font-weight:600;
              color:grey;
             }
             .vegLogo{
             height:20px;
             vertical-align:middle;
             }
             .donateMeal{
             font-weight:600;
              color:grey;
             }
              .donateaddress{
             font-weight:600;
              color:grey;
             }
        `}
      </style>
    </>
  );
};

export default DonationHistory;
