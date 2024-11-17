import DonateFoodNavbar from "../../components/DonateFoodNavbar";
import { TbMailFilled } from "react-icons/tb";
const Aboutus=()=>{
    return <>
    <DonateFoodNavbar link="profile"/>
    <div className="main">
    <img src="./images/logofinal.jpg" className="image"/>
    <div className="mainsection">
        <h3 className="subsection">Our Mission: Nourishing Lives</h3>
        <p >At Annapurna Connect, we believe everyone deserves access to food. Our mission is simple: to make it easier for people to donate food and for communities to receive it. We connect donors with local shelters and food banks to help those in need.</p>
        <h3 className="subsection">What We Do</h3>
        <p>We provide a platform that helps individuals, restaurants, and businesses donate food to people who need it most. Whether it's extra groceries, leftover meals, or food from your business, we help you share what you have with others.</p>
        <h3 className="subsection">How It Works</h3>
        <p>Donate: Easily donate food from your home or business.
Find Help: If you’re in need, find nearby shelters or food banks.
Track Impact: See how your donations are helping those in need.</p>
<h3 className="subsection">Why Choose Us?</h3>
<p>Simple: Donating food is quick and easy with just a few taps.
Local: Donations go directly to local organizations.
Impactful: Your donations reduce food waste and help those who need it.</p>
<h3 className="subsection">Join Us</h3>
<p>Help us fight hunger and create a stronger community by donating food today.</p>
<h3 className="subsection">Contact Us</h3>
<p>Questions? Reach us at <a href="mailto:singlagoutam01@gmail.com"><TbMailFilled className="mail"/> Send Email</a></p>
    </div>

    </div>

    <style jsx>
        {`

        .image{
        padding-top:67px;
        width:100%;
        }
        .mainsection{
        padding:20px;
        text-align: justify;
        text-justify:inter-word;
        }
        .subsection{
        margin-top:15px;
        margin-bottom:6px;
        }
        .mail{
        font-size:20px;
        margin-bottom:-4px;
        margin-left:10px;
}
        }
        `}
    </style>
    </>
}

export default Aboutus;