import styles from "./campaign.module.css";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import BottomNavbar from "../../components/BottomNavbar";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";

const Campaign = ({ campaignData, handleVolunteerInput }) => {
  const { id } = useParams();
  const campaignDetails = campaignData.filter(
    (data) => data.id === parseInt(id)
  );
  const history = useHistory();

  const handleClick = (e) => {
    handleVolunteerInput(e);
    history.push("/volunteerDetails");
  };
  return (
    <>
      <DonateFoodNavbar link="/" />
      <BottomNavbar />
      <div className={styles.main}>
        <h2>
          {" "}
          {campaignDetails[0].title} &nbsp;
          {!campaignDetails[0].completed ? (
            <span className={styles.badgeactive}>active</span>
          ) : (
            <span className={styles.badgecompleted}>completed</span>
          )}
        </h2>
        <p>Date: {campaignDetails[0].Date}</p>
        <img
          src={campaignDetails[0].image}
          alt="Campaign Banner"
          style={{}}
          className={styles.image}
        />

        <p>Location: {campaignDetails[0].Location}</p>
        <p>Goal: {campaignDetails[0].goal}</p>
        <section className={styles.lastsec}>
          <h2>About the Campaign</h2>
          <p>{campaignDetails[0].description}</p>
        </section>
        <section className={styles.lastsec}>
          <h2>How You Can Help </h2>
          <div className={styles.btngroup}>
            <button
              className={styles.button}
              onClick={handleClick}
              name="donateTo"
              value="Campaigns"
            >
              Register as volunteer
            </button>

            <button
              className={styles.button}
              onClick={() => history.push("/donationType")}
            >
              Donate Now
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Campaign;
