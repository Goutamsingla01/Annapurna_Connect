import { useState } from "react";
import styles from "./login.module.css";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import axios from 'axios';
const Login=()=>{
  const [isSubmitted, setIsSubmitted] = useState(true);
const googlelogin = () => {
         setIsSubmitted(false);
          window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google`;
        };

const [userDetails,setUserDetails]=useState({email:'',password:''});

const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    try {
        const response =await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
        userDetails, {
            withCredentials: true,
          }
      );
      setUserDetails({email:'',password:''})
      if (response.status === 200) {
        window.location.href = '/'; // Use front-end URL to redirect
      }
    } catch (err) {
      if (err.response) {
        // Handle error from backend response
        alert(err.response.data.message); // 
      } else {
        // Handle any other errors (network issues, etc.)
        alert("Something went wrong, please try again.");
      }
      setUserDetails({email:'',password:''})
    }finally{
      setIsSubmitted(true);
    }
  };
const handleChange=(e)=>{
  const { name, value } = e.target;
  setUserDetails((prev) => {
    return {
      ...prev,
      [name]: value,
    };
  });
}
 return <>

<div className={styles.main}>
<center >
            <h2 className="dm-serif-display-regular">Feed a Soul, Start Here</h2>
            <p className="dm-serif-display-regular-italic">Log in now to support a cause that matters.</p></center>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <button className={styles.signup_btn} type="submit" disabled={!isSubmitted}>{!isSubmitted?'Logging...':'Log in'}</button>
      </form>

      <div className={styles.or}>
        <div className={styles.number}>
          <p>or</p>
        </div>
      </div>

      <div className={styles.lower}>
        <p className={styles.signUpWith}>Log in with</p>
        <div onClick={googlelogin} className={styles.google} disabled={!isSubmitted}>
          <FcGoogle className={styles.iconGoogle} />
          <p>{!isSubmitted?'Logging...':'Login with Google'}</p>
        </div>
        <div className={styles.google}>
          <BsFacebook className={styles.iconFb} />
          <p>Login with Facebook</p>
        </div>
      </div>
      <div className={styles.noaccount}>
         No account?
        <Link to="/signup"><p className={styles.noaccountlink}>create one !</p></Link>
        </div>
    </div>
 </>
}

export default Login;