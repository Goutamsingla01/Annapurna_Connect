import styles from "./campaignCard.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const CampaignCard = (props) => {
  const { data } = props;

  return (
    <div className={styles.card}>
      <img className={styles.image} src={data.image} alt="" />
      <div className={styles.details}>
        <p className={styles.title}>{data.title}</p>
        <div className={styles.detail}>
          
          <p>{data.Date}</p>
        </div>
        <div className={styles.card_bottom}>
          <div className={styles.detail}>
            
            <p>{data.Location}</p>
          </div>
          <div>
            <BsFillArrowRightCircleFill className={styles.arrow_icon}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
