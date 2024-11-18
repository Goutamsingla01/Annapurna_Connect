import styles from "./volunteerDetails.module.css";
import BottomNavbar from "../../components/BottomNavbar";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";

const VolunteerDetails = (props) => {
  const { handleVolunteerForm,handleVolunteerInput,volunteerData,isModalOpen,setModalState,isSubmitted } = props;
 
  
  const handleClick=(e)=>{
    e.preventDefault();
    handleVolunteerForm();
  }
  return (
    <>
      <DonateFoodNavbar link="/campaigns" />
      <BottomNavbar />
      <div className={styles.main}>
        <p className={styles.heading}>Confirm Volunteer details</p>
        
        <p className={styles.heading}>Location</p>
        <div className={styles.input_box}>
          <GoLocation />
          <input
            type="text"
            placeholder="Sector 15, Spine City, New Delhi"
            name="address" value={volunteerData.address} onChange={handleVolunteerInput}
          />
        </div>
        <p className={styles.heading}>Where do you want to volunteer</p>
        
          <select name="donateTo" id="donateTo" className={styles.input_box}  value={volunteerData.donateTo} onChange={handleVolunteerInput}>
          <option value="Anywhere">Anywhere</option>
  <option value="Annakshetra">Annakshetra</option>
  <option value="Feeding India">Feeding India</option>
  <option value="Delhi Langar Seva Society">Delhi Langar Seva Society</option>
  <option value="Wishes and Blessings">Wishes and Blessings</option>
  <option value="Uday Foundation">Uday Foundation</option>
  <option value="ISKCON Annamrita">ISKCON Annamrita</option>
  <option value="Manukhta Di Sewa Society">Manukhta Di Sewa Society</option>
  <option value="BHAI KANHAIYA MANAV SEWA TRUST">BHAI KANHAIYA MANAV SEWA TRUST</option>
  <option value="Campaigns">Campaigns</option>
  <option value="Hunger Spot">Hunger Spot</option>
</select>
       

        <p className={styles.heading}>Contact Information</p>
        <div className={styles.input_box}>
          <BsTelephone />
          <input type="number" placeholder="7011746391" name="phoneNo" value={volunteerData.phoneNo} onChange={handleVolunteerInput}/>
        </div>

        <p className={styles.heading}>By when you can volunteer</p>
        <div className={styles.input_box}>
          <input type="date" placeholder="30-Sep-2021"  name="volunteerDate" value={volunteerData.volunteerDate} onChange={handleVolunteerInput}/>
        </div>

        <div className={[styles.input_box, styles.bottom_input].join(" ")}>
          <input type="time" placeholder="Time" name="volunteerTime" value={volunteerData.volunteerTime} onChange={handleVolunteerInput}/>
        </div>

        <div className={styles.range_slider}>
          <p className={styles.heading}>Volunteer Time (Hrs)</p>
          <input
            name="devotedTime" value={volunteerData.devotedTime} onChange={handleVolunteerInput}
            type="range"
            className={styles.slider}
            min="0"
            max="12"
          />
          <div className={styles.numbers}>
            <p>0</p>
            <p>2</p>
            <p>4</p>
            <p>6</p>
            <p>8</p>
            <p>10</p>
            <p>12</p>
          </div>
        </div>

        <div className={styles.guideline}>
          <input type="checkbox" />
          <label>All Information provided is true to the best of my knowledge</label>
        </div>
        <div className={styles.btn}>
          <button className={styles.button} onClick={handleClick} disabled={!isSubmitted}> {!isSubmitted?'Posting...':'Post'}</button>
        </div>
      </div>

      {isModalOpen ? (
          <div className={styles.modal_overlay}>
            <div className={styles.modal_container}>
              <IoIosCheckmarkCircle className={styles.icon} />
              <p>Volunteer Request service sent succesfully !!</p>
              <p>You will notified soon</p>
              <button className={styles.button} onClick={()=>(setModalState((state) => !state))}>Okay</button>
            </div>
          </div>
        ) : null}
    </>
  );
};

export default VolunteerDetails;
