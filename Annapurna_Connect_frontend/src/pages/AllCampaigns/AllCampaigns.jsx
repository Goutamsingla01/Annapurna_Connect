import styles from "./allCampaigns.module.css";
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
      <div className={styles.main}>
        <h2 className={styles.headline}>Campaigns List</h2>
        <div className={styles.upcoming}>

        
        <h3 className={styles.sideline}>Upcoming campaigns</h3>
        {campaignData.map((el) => {
          if(!el.completed)
          return (
            <Link to={`/campaigns/${el.id}`}  key={el._id}>
              <CampaignCard data={el} />
            </Link>
          );
          return null;
        })}
        </div>
        <div className={styles.upcoming}>
<h3 className={styles.sideline}>Completed campaigns</h3>
        {campaignData.map((el) => {
          if(el.completed)
          return (
            <Link to={`/campaigns/${el.id}`}  key={el._id}>
              <CampaignCard data={el} />
            </Link>
          );
          return null;
        })}
        </div>
      </div>
    </>
  );
};

export default AllCampaigns;
