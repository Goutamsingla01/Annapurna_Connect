import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';
import BottomNavbar from "../../components/BottomNavbar";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";

const Campaign=({campaignData,handleVolunteerInput})=>{
    const { id } = useParams();
    const campaignDetails = campaignData.filter(data=>data.id===parseInt(id));
    const history = useHistory();

    const handleClick=(e)=>{
      handleVolunteerInput(e);
      history.push('/volunteerDetails');
    }
    return (<>
    <DonateFoodNavbar link="/"/>
    <BottomNavbar/>
    <div className="main">
    <h2> {campaignDetails[0].title} &nbsp;{!campaignDetails[0].completed?<span className="badge-active">active</span>:<span className="badge-completed">completed</span>}</h2>
  <p>Date: {campaignDetails[0].Date}</p>
  <img src={campaignDetails[0].image} alt="Campaign Banner" style={{}} className="image"/>
  
  <p>Location: {campaignDetails[0].Location}</p>
  <p>Goal: {campaignDetails[0].goal}</p>
<section className="lastsec">
  <h2>About the Campaign</h2>
  <p>{campaignDetails[0].description}</p>
</section>
<section className="lastsec">
  <h2>How You Can Help </h2>
  <div className="btngroup">
  
  <button  className="button" onClick={handleClick} name="donateTo" value="Campaigns">Register as volunteer</button>
  
  <button className="button" onClick={()=>(history.push('/donationType'))}>Donate Now</button>
  </div>
</section>
</div>
<style jsx>
    {`
    .main{
        background-color: white;
        min-height:120vh;
        padding: 80px 15px 55px 15px; //t r b l
    }
        
        .badge-active{
        font-weight:400;
        font-size:17px;
        color:green;
        border-radius:20px;
        border:2px solid green;
        padding:0px 5px;
        }
        .badge-completed{
        font-weight:400;
        font-size:17px;
        color:grey;
        border-radius:20px;
        border:2px solid grey;
        padding:0px 5px;
        }
        .image{
        width:100%;
        margin:10px 0;
        }
        .lastsec{
        margin:10px 0;
        }
        .button{
        background: #fb7e00;
            text-decoration: none;
            color: white;
            border:1px solid #fb7e00;
            width: 160px;
    height: 50px;
    cursor: pointer;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
        }
            .btngroup{
            width: 100%;
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 28px;
            }
    `}
</style>
</>
    )
}

export default Campaign;