import styles from "./confirmFoodDetails.module.css";
import BottomNavbar from "../../components/BottomNavbar";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";


import Button from "../../components/Button";

const ConfirmFoodDetails = (props) => {
  const { foodData,handleInput } = props;
 


  return (
    <>
      <DonateFoodNavbar link="/foodDetails" />
      <BottomNavbar />
      <div className={styles.main}>
        <p className={styles.heading}>Confirm food details</p>
        <div className={styles.top_section}>
          <div className={styles.left}>
            <p>{foodData.type}</p>
            <p>{foodData.meal}</p>
            <p>{foodData.quantity} servings</p>
          </div>
          <div className={styles.right}>
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt=""
            />
          </div>
        </div>
        
        <p className={styles.heading}>Pickup Location</p>
        <div className={styles.input_box}>
          <GoLocation />
          <input
            type="text"
            placeholder="Sector 15, Spine City, New Delhi"
            name="address" value={foodData.address} onChange={handleInput}
          />
        </div>
        <p className={styles.heading}>Where do you want to donate</p>
        
          <select name="donateTo" id="donateTo" className={styles.input_box}  value={foodData.donateTo} onChange={handleInput}>
          <option value="Anywhere">Anywhere</option>
  <option value="Annakshetra">Annakshetra</option>
  <option value="Feeding India">Feeding India</option>
  <option value="Delhi Langar Seva Society">Delhi Langar Seva Society</option>
  <option value="Wishes and Blessings">Wishes and Blessings</option>
  <option value="Uday Foundation">Uday Foundation</option>
  <option value="ISKCON Annamrita">ISKCON Annamrita</option>
  <option value="Manukhta Di Sewa Society">Manukhta Di Sewa Society</option>
  <option value="BHAI KANHAIYA MANAV SEWA TRUST">BHAI KANHAIYA MANAV SEWA TRUST</option>
  <option value="Hunger Spot">Hunger Spot</option>
  <option value="Campaigns">Campaigns</option>
</select>
       

        <p className={styles.heading}>Contact Information</p>
        <div className={styles.input_box}>
          <BsTelephone />
          <input type="number" placeholder="7011746391" name="phoneNo" value={foodData.phoneNo} onChange={handleInput}/>
        </div>

        <p className={styles.heading}>By when you can donate</p>
        <div className={styles.input_box}>
          <input type="date" placeholder="30-Sep-2021"  name="donateDate" value={foodData.donateDate} onChange={handleInput}/>
        </div>

        <div className={[styles.input_box, styles.bottom_input].join(" ")}>
          <input type="time" placeholder="Time" name="donateTime" value={foodData.donateTime} onChange={handleInput}/>
        </div>

        <div className={styles.range_slider}>
          <p className={styles.heading}>Best Before Time (Hrs)</p>
          <input
            name="bestBefore" value={foodData.bestBefore} onChange={handleInput}
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
          <label>All food donated should be under Guidelines</label>
        </div>
        <div className={styles.btn}>
          <Button text="Post" link="/delivery" />
        </div>
      </div>
    </>
  );
};

export default ConfirmFoodDetails;
