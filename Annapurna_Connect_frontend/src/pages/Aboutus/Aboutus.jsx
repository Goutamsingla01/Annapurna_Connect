import DonateFoodNavbar from "../../components/DonateFoodNavbar";
import { TbMailFilled } from "react-icons/tb";
import styles from "./aboutus.module.css";
const Aboutus=()=>{

    return <>
    <DonateFoodNavbar link="profile"/>
    <div className={styles.main}>
    <img src="./images/logofinal.jpg" className={styles.image} alt="Annapurna Connect"/>
    <div className={styles.mainsection}>
        <h3 className={styles.subsection}>Our Mission: Nourishing Lives</h3>
        <p >At Annapurna Connect, we believe everyone deserves access to food. Our mission is simple: to make it easier for people to donate food and for communities to receive it. We connect donors with local shelters and food banks to help those in need.</p>
        <h3 className={styles.subsection}>What We Do</h3>
        <p>We provide a platform that helps individuals, restaurants, and businesses donate food to people who need it most. Whether it's extra groceries, leftover meals, or food from your business, we help you share what you have with others.</p>
        <h3 className={styles.subsection}>How It Works</h3>
        <p>Donate: Easily donate food from your home or business.
Find Help: If you’re in need, find nearby shelters or food banks.
Track Impact: See how your donations are helping those in need.</p>
<h3 className={styles.subsection}>Why Choose Us?</h3>
<p>Simple: Donating food is quick and easy with just a few taps.
Local: Donations go directly to local organizations.
Impactful: Your donations reduce food waste and help those who need it.</p>
<h3 className={styles.subsection}>Join Us</h3>
<p>Help us fight hunger and create a stronger community by donating food today.</p>
<h3 className={styles.subsection}>Contact Us</h3>
<p>Questions? Reach us at <a href="mailto:singlagoutam01@gmail.com"><TbMailFilled className={styles.mail}/> Send Email</a></p>
    </div>

    </div>

    </>
}

export default Aboutus;