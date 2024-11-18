import { useState } from "react";
import BottomNavbar from "../../components/BottomNavbar";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";
import { GrEdit } from "react-icons/gr";
const Edit=({user,handleSubmit,handleChange,handlePhoto,isSubmitted})=>{

 const [imagesrc,setImagesrc]= useState(!user.image?user.profilePic :`data:user.image/jpeg;base64,${user.image}`);
 const handlePhotoChange=(e)=>{
  const file = e.target.files[0]; 
  const reader = new FileReader();
  reader.onloadend = () => {
    setImagesrc(reader.result);  
  };
  if (file) {
    reader.readAsDataURL(file);  // Read the file as a Data URL
    handlePhoto(e);  // Pass the file to handle the upload (not done yet)
  }
 }
    return <>
    <BottomNavbar/>
    <DonateFoodNavbar link="/profile"/>
    <div className="main">
        <div className="image">
            <img src={imagesrc} className="imh" alt="profile"/>
            <label htmlFor="inputfile">
            <div className="editicon" ><GrEdit /></div>
            </label>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                id="inputfile"
                name="image"
                onChange={handlePhotoChange}
                className="inputfile"
            />
        </div>

        <center>
            <h2 className="name roboto-regular">{user.name}</h2>
            </center>

        
        <form onSubmit={handleSubmit} encType='multipart/form-data' className="form">
        <div className="inputTag">
        <p className="formheading">Email Address</p>
        <div className="input_box">
          <input
            type="text"
            placeholder="email"
            name="email" 
            value={user.email}
            disabled
          />
        </div>
        </div>

        <div className="inputTag">
        <p className="formheading">Name</p>
        <div className="input_box">
          <input
            type="text"
            placeholder="name"
            name="name" 
            defaultValue={user.name}
            onChange={handleChange}
          />
        </div>
        </div>
        
        <button className="postbtn" type="submit" disabled={!isSubmitted}>{!isSubmitted?'Posting...': 'Post'}</button>
        </form>
        </div>

    
    <style jsx>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        .roboto-regular {
  
}


        .main{
        padding-top:100px;
        padding-bottom:70px;
        background:white;
        padding-left:20px;
        padding-right:20px;
        height:100vh;
        }
        .image{
        margin:auto;
        height:120px;
        width:120px;
        position:relative;
        }
        .image>img{
        border-radius:50%;
        height:100%;
        width:100%;
        }
        .editicon{
        position:absolute;
        bottom:2px;
        right:2px;
        background:grey;
        border-radius:50%;
        height:40px;
        width:40px;
        color:white;
        padding:7px;
        border:5px solid white;
        }
        .name{
        margin:10px;
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-style: normal;

        }
        .form{
        display:flex;
        flex-direction:column;
        align-items:center;
        }

    
        .input_box {
  width: 340px;
  height: 30px;
  border-bottom: 1px solid #6e7275;
  gap: 12px;
  color: #6e7275;
}

.input_box > input {
  width: 100%;
  outline: none;
  border: none;
  font-size:17px;
  background:white;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-style: normal;
}
  .formheading {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 17px;
  line-height: 21px;
  margin-top: 24px;
  margin-bottom:10px;
  color:grey;
}
  .postbtn {
  height: 48px;
  width: 368px;
  border-radius: 10px;
  padding: 8px 130px;
  background: #fb7e00;
  border-radius: 10px;
  border: none;
  color: white;
  text-align: center;
  letter-spacing: 0.0015em;
  color: white;
  font-size: 16px;
  margin-top: 70px;
}
  .inputfile{
  display:none;}
        `}
    </style>
    </>
}

export default Edit;