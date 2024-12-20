import { useState } from "react";
import styles from "./signup.module.css";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
 const [userDetails,setUserDetails]=useState({name:'',email:'',password:''});
 const history = useHistory();
 const [isSubmitted, setIsSubmitted] = useState(true);

 const handleSignup = async (e) => {
  e.preventDefault();
  setIsSubmitted(false);
  try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/signup`, userDetails);
      alert(response.data.message);
      history.push('/');
  } catch (err) {
    if (err.response) {
      // Handle error from backend response (email already exists)
      alert(err.response.data.message); // Display the error message (Email already exists)
    } else {
      // Handle any other errors (network issues, etc.)
      alert("Something went wrong, please try again.");
    }
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
  return (
    <div className={styles.main}>
      <h1>Sign up</h1>
      <form onSubmit={handleSignup} className={styles.form}>
        <input type="text" id="name" name="name" 
        placeholder="Name" onChange={handleChange}
        required/>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address "
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="confirmpassword"
          name="confirmpassword"
          placeholder="Confirm Password"
          required
        />
        <button className={styles.signup_btn}type="submit" disabled={!isSubmitted}>{!isSubmitted?'Signing...':'Sign up'}</button>
      </form>
      <center >
      <Link to="/"><p className={styles.back}>
      &lt; back to login</p></Link>
      </center>
    </div>
  );
};

export default Signup;
