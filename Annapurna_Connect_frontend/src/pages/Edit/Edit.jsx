import styles from "./edit.module.css";
import { useState } from "react";
import BottomNavbar from "../../components/BottomNavbar";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";
import { GrEdit } from "react-icons/gr";
const Edit = ({
  user,
  handleSubmit,
  handleChange,
  handlePhoto,
  isSubmitted,
}) => {
  const [imagesrc, setImagesrc] = useState(
    !user.image ? user.profilePic : `data:user.image/jpeg;base64,${user.image}`
  );
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagesrc(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file); // Read the file as a Data URL
      handlePhoto(e); // Pass the file to handle the upload (not done yet)
    }
  };
  return (
    <>
      <BottomNavbar />
      <DonateFoodNavbar link="/profile" />
      <div className={styles.main}>
        <div className={styles.image}>
          <img src={imagesrc}  alt="profile" className={styles.imh}/>
          <label htmlFor="inputfile">
            <div className={styles.editicon}>
              <GrEdit />
            </div>
          </label>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            id="inputfile"
            name="image"
            onChange={handlePhotoChange}
            className={styles.inputfile}
          />
        </div>

        <center>
          <h2 className={`${styles.name} roboto-regular`}>{user.name}</h2>
        </center>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className={styles.form}
        >
          <div className={styles.inputTag}>
            <p className={styles.formheading}>Email Address</p>
            <div className={styles.input_box}>
              <input
                type="text"
                placeholder="email"
                name="email"
                value={user.email}
                disabled
              />
            </div>
          </div>

          <div className={styles.inputTag}>
            <p className={styles.formheading}>Name</p>
            <div className={styles.input_box}>
              <input
                type="text"
                placeholder="name"
                name="name"
                defaultValue={user.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <button className={styles.postbtn} type="submit" disabled={!isSubmitted}>
            {!isSubmitted ? "Posting..." : "Post"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Edit;
