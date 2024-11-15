import DonateFoodNavbar from "../../components/DonateFoodNavbar";

import BottomNavbar from "../../components/BottomNavbar";
import { Link } from "react-router-dom";
import CampaignCard from "../../components/CampaignCard";

const AllCampaigns = (props) => {
  const { campaignData } = props;
  return (
    <>
      <BottomNavbar />
      <DonateFoodNavbar link="/" />
      <div className="main">
        <h2 className="headline">Campaigns List</h2>
        <div className="upcoming">

        
        <h3 className="sideline">Upcoming campaigns</h3>
        {campaignData.map((el) => {
          if(!el.completed)
          return (<>
            <Link to={`/campaigns/${el.id}`}>
              <CampaignCard data={el} key={el.id}/>
            </Link>
            </>
          );
          return <></>
        })}
        </div>
        <div className="upcoming">
<h3 className="sideline">Completed campaigns</h3>
        {campaignData.map((el) => {
          if(el.completed)
          return (<>
            <Link to={`/campaigns/${el.id}`}>
              <CampaignCard data={el} key={el.id}/>
            </Link>
            </>
          );
          return <></>
        })}
        </div>
      </div>

      <style jsx>
        {`
          .main {
            background-color: white;
            height: 100%;
            padding: 22px;
            margin-top: 54px ;
            padding-bottom:60px;
          }

          .headline {
            font-weight: 600;
            font-size: 18px;
            line-height: 27px;
            text-align: center;
          }
            .sideline{
            font-weight: 500;
            font-size: 16px;
            line-height: 27px;
            text-align: center;
            margin:10px 0;
            }
            .upcoming{
            border:1px solid grey;
            border-radius:20px;
            padding:5px;
            margin:20px 0;
            }
        `}
      </style>
    </>
  );
};

export default AllCampaigns;
