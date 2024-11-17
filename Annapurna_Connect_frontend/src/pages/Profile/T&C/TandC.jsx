import DonateFoodNavbar from "../../../components/DonateFoodNavbar";
import { TbMailFilled,TbPhoneFilled} from "react-icons/tb";
const TandC=()=>{
    return <>
    <DonateFoodNavbar link="profile"/>
    <div className="main">
     <div className="topsection">
     <p>Agreement</p>
     <h3>Terms and Conditions</h3>
     <p>Effective Date: 15/11/2024</p>
     </div>
     <div className="mainsection">
        <h3 className="subheading">Introduction</h3>
        <p>Welcome to Annapurna Connect, a platform dedicated to supporting food donations. By accessing or using our app, you agree to comply with these Terms and Conditions. Please read them carefully.</p>
        <h3 className="subheading">User Responsibilities</h3>
        <p><b>Eligibility:</b> You must be 18 or older to use our services.<br/>
<b>Donations:</b> All donations made through our app are voluntary and final. Please ensure accuracy before confirming any donations.<br/>
<b>Account Security:</b> Keep your account details safe. You are responsible for all activity on your account.</p>
<h3 className="subheading"> Privacy</h3>
<p>We respect your privacy. Our Privacy Policy outlines how we collect and use your data. By using our app, you consent to the practices described in our Privacy Policy.</p>
<h3 className="subheading">Prohibited Activities</h3>
<p>You agree not to:

Engage in fraud, misrepresentation, or abuse of the platform.
Post offensive, harmful, or illegal content.
Disrupt or interfere with the app’s services.</p>
<h3 className="subheading">Intellectual Property</h3>
<p>All content on this app, including logos, text, and images, is owned by <b>Annapurna Connect</b> or its licensors and is protected by copyright laws.</p>
<h3 className="subheading">Dispute Resolution</h3>
<p>If any dispute arises, you agree to resolve it through  Mediation in New Delhi. Legal matters will be governed by the laws of India.</p>
<h3 className="subheading">Modification of Terms</h3>
<p>We may update or change these Terms at any time. When changes are made, we’ll update the Effective Date above. You’ll be notified via the app or by email.</p>
<h3 className="subheading">Contact Us</h3>
<p>If you have any questions or need assistance, please contact us:
<br/>
Email: <a href="mailto:singlagoutam12@gmail.com"><TbMailFilled className="mail"/> Send Email</a><br/>
Phone: <a href="tel:+917011746391"><TbPhoneFilled className="mail"/> call</a></p>
     </div>
     </div>
     <style jsx>
        {`
        .topsection{
        border-bottom:1px solid grey;
        padding:20px;
        }
        .topsection p{
        color:grey;}
        .main{
        padding-top:60px;
        }
        .topsection h3{
        font-size:24px;
        }
        .mainsection{
        padding:20px;
        text-align: justify;
        text-justify:inter-word;
        }
        .subheading{
        margin-top:10px;
        margin-bottom:6px;
        font-size:19px;
        }
        .mail{
        font-size:20px;
        margin-bottom:-4px;
        margin-left:10px;
}
        `}
     </style>
    </>
}

export default TandC;