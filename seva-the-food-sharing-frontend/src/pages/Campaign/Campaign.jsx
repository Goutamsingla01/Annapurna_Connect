import { useParams } from "react-router";
import BottomNavbar from "../../components/BottomNavbar";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";

const Campaign=({campaignData})=>{
    const { id } = useParams();
    const campaignDetails = campaignData.filter(data=>data.id===parseInt(id));
    return (<>
    <DonateFoodNavbar link="/"/>
    <BottomNavbar/>
    <div className="main">
  <img src={campaignDetails[0].image} alt="Campaign Banner" style={{width:"100%"}}/>
  <h1> {campaignDetails[0].title}</h1>
  <p>Date: {campaignDetails[0].Date}</p>
  <p>Location: {campaignDetails[0].Location}</p>
  <p>Tagline: "Join us in our mission to feed the hungry!"</p>
  <p>{campaignDetails[0].goal}</p>

<section>
  <h2>About the Campaign</h2>
  <p>{campaignDetails[0].description}</p>
</section>
<section>
  <h2>How You Can Help </h2>
  <button text="Register to Volunteer" />
  <button text="Donate" />
</section>
</div>
<style jsx>
    {`
    .main{
        padding:80px 0;
        background-color: white;
    }
    `}
</style>
</>
    )
}

export default Campaign;