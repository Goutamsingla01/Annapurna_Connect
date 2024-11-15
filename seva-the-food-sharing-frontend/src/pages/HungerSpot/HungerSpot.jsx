import BottomNavbar from "../../components/BottomNavbar";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";

const HungerSpot=()=>{
    return <>
    <DonateFoodNavbar/>
    <BottomNavbar/>
    <div class="google-map">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448194.82162352453!2d77.09323125000002!3d28.6440836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1731555089675!5m2!1sen!2sin" width="100" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
    <style jsx>
        {`
        .google-map {
     padding-bottom: 70px;
     padding-top:70px;
     position: relative;
     height:92vh;
     overflow:hidden;
}

.google-map iframe {
     height: 100%;
     width: 100%;
     left: 0;
     top: 0;
     position: absolute;
}
        `}
    </style>
    </>
}

export default HungerSpot;