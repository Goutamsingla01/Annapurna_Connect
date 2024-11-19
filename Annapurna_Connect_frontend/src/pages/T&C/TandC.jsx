import styles from "./tandC.module.css";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";
import { TbMailFilled,TbPhoneFilled} from "react-icons/tb";
const TandC=()=>{
    return <>
    <DonateFoodNavbar link="profile"/>
    <div className={styles.main}>
     <div className={styles.topsection}>
     <p>Agreement</p>
     <h3>Terms and Conditions</h3>
     <p>Effective Date: 15/11/2024</p>
     </div>
     <div className={styles.mainsection}>
        <h3 className={styles.subheading}>Introduction</h3>
        <p>Welcome to Annapurna Connect, a platform dedicated to supporting food donations. By accessing or using our app, you agree to comply with these Terms and Conditions. Please read them carefully.</p>
        <h3 className={styles.subheading}>User Responsibilities</h3>
        <p><b>Eligibility:</b> You must be 18 or older to use our services.<br/>
<b>Donations:</b> All donations made through our app are voluntary and final. Please ensure accuracy before confirming any donations.<br/>
<b>Account Security:</b> Keep your account details safe. You are responsible for all activity on your account.</p>
<h3 className={styles.subheading}> Privacy</h3>
<p>We respect your privacy. Our Privacy Policy outlines how we collect and use your data. By using our app, you consent to the practices described in our Privacy Policy.</p>
<h3 className={styles.subheading}>Prohibited Activities</h3>
<p>You agree not to:

Engage in fraud, misrepresentation, or abuse of the platform.
Post offensive, harmful, or illegal content.
Disrupt or interfere with the app’s services.</p>
<h3 className={styles.subheading}>Intellectual Property</h3>
<p>All content on this app, including logos, text, and images, is owned by <b>Annapurna Connect</b> or its licensors and is protected by copyright laws.</p>
<h3 className={styles.subheading}>Dispute Resolution</h3>
<p>If any dispute arises, you agree to resolve it through  Mediation in New Delhi. Legal matters will be governed by the laws of India.</p>
<h3 className={styles.subheading}>Modification of Terms</h3>
<p>We may update or change these Terms at any time. When changes are made, we’ll update the Effective Date above. You’ll be notified via the app or by email.</p>
<h3 className={styles.subheading}>Contact Us</h3>
<p>If you have any questions or need assistance, please contact us:
<br/>
Email: <a href="mailto:singlagoutam12@gmail.com"><TbMailFilled className={styles.mail}/> Send Email</a><br/>
Phone: <a href="tel:+917011746391"><TbPhoneFilled className={styles.mail}/> call</a></p>
     </div>
     </div>
    </>
}

export default TandC;