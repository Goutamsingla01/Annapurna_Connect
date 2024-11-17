import { useState } from "react";
import styles from "./login.module.css";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const Login=()=>{

const login = () => {
    console.log("ki")
          window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google`;
        };

const [userDetails,setUserDetails]=useState({email:'',password:''});

const history = useHistory();
const handleLogin = async (e) => {
    e.preventDefault();
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
      console.error("Login failed!");
      setUserDetails({email:'',password:''})
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
      <h1>Log In</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address "
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className={styles.signup_btn} type="submit">Log in</button>
      </form>

      <div className={styles.or}>
        <div className={styles.number}>
          <p>or</p>
        </div>
      </div>

      <div className={styles.lower}>
        <p className={styles.signUpWith}>Log in with</p>
        <div onClick={login} className={styles.google}>
          <FcGoogle className={styles.iconGoogle} />
          <p>Login with Google</p>
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