import DonateFoodNavbar from "../../components/DonateFoodNavbar";

import Accordion from "../../components/Accordion";
import BottomNavbar from "../../components/BottomNavbar";

const FAQ=()=>{
    


 return <>
 <DonateFoodNavbar link="/profile"/>
 <BottomNavbar/>
 <div className="main">
    <center>
    <h3 className="faqheading">FAQ</h3>
    </center>
    <h4 className="faqsubheading">General Questions</h4>
 <Accordion title="What is the main goal of this food donation project?"
       content="The goal of the project is to minimize food waste by facilitating donations to those in need, ensuring that surplus food reaches underprivileged communities instead of being discarded."
     />

<Accordion title="Who can donate food?"
       content=" Anyone, including individuals, restaurants, grocery stores, and organizations, can donate food as long as it meets the safety and quality guidelines."
     className="accordion"/>
 <Accordion title="How can I register as a donor or recipient?"
       content='You can register on our website or app by filling out a simple form under the "Get Involved" section. Once registered, you can start donating or requesting food.'
     />
     <Accordion title="Is there a cost involved in donating or receiving food?"
       content='No, our platform is entirely free to use for both donors and recipients.'
     />
     <h4 className="faqsubheading">Food Donation Process</h4>
 <Accordion title="What types of food can be donated?"
       content="Non-perishable items, fresh produce, cooked meals, and bakery items can be donated, provided they are safe and within their expiration date."
     />

<Accordion title="How do I schedule a food pickup?"
       content="After registering as a donor, log in to your account, fill in the details of the food items in donate section, and request a pickup through the platform. Our team or a partnered organization will coordinate with you."
     className="accordion"/>
 <Accordion title="Can I donate food anonymously?"
       content="Yes, we respect your privacy and provide the option to donate anonymously."
     />
     <Accordion title="How do recipients receive the food?"
       content="Recipients can browse available food donations through the platform and schedule a pickup or delivery, depending on the donor's preference."
     />
     <h4 className="faqsubheading">Safety and Guidelines</h4>
 <Accordion title="How do you ensure the safety of the donated food?"
       content="We provide guidelines to donors about safe handling, storage, and packaging of food. Additionally, our team checks the donations to ensure they meet quality standards before distribution."
     />

<Accordion title="Can I donate leftover food from an event?"
       content="Yes, as long as the food is freshly prepared, properly stored, and safe for consumption."
     className="accordion"/>
 <Accordion title="Can I donate food anonymously?"
       content="Yes, we respect your privacy and provide the option to donate anonymously."
     />
     <Accordion title="Are there any legal implications for donating food?"
       content="Many countries have Good Samaritan laws that protect food donors from liability as long as the food is donated in good faith and is safe to consume."
     />
     <h4 className="faqsubheading">Impact and Community Engagement</h4>
 <Accordion title="How does the project help reduce food waste?"
       content="By redirecting surplus food to those in need, we prevent it from ending up in landfills, thus reducing waste and supporting environmental sustainability."
     />

<Accordion title="How can I volunteer for this project?"
       content="You can sign up as a volunteer through our website or app. Volunteers assist with food collection, delivery, awareness campaigns, and more."
     className="accordion"/>
 <Accordion title="How can I spread the word about this project?"
       content="You can share our website, app, or social media pages with your friends, family, and local community to encourage participation."
     />
     <Accordion title="Can companies partner with this project?"
       content='Yes, we welcome partnerships with businesses, restaurants, and other organizations. Please contact us through the "Partnerships" section on our platform.'
     />
 </div>

 <style jsx>
    {`
    .main{
    padding-top:80px;
    
    padding-bottom:100px;
    
    }
    .accordion{
    border-top:1px solid black}

    .faqheading{
    padding-top:15px;
    padding-bottom:5px;
    font-size:25px;
    width:100%;
    height:70px;
    background-image: linear-gradient(to right, #fb7e00, #ffdf34);
    color:white;
    text-align: center;
    }
    .faqsubheading{
    padding:18px;
    }
    `}
 </style>
 </>
}

export default FAQ;