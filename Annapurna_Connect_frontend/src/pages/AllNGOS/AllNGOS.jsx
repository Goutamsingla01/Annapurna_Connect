import styles from "./allNGOS.module.css";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";
import NGOCard from "../../components/NGOCard";
import BottomNavbar from "../../components/BottomNavbar";
import { Link } from "react-router-dom";

const AllNGOS = (props) => {
  const { data } = props;

  return (
    <>
      <BottomNavbar />
      <DonateFoodNavbar link="/" />
      <div className={styles.main}>
        <h2 className={styles.headline}>Choose where you want to donate</h2>
        {data.map((el) => {
          return (
            <Link to={`/all/${el.id}`} key={el.id}>
              <NGOCard data={el} />
            </Link>
          );
        })}
      </div>

      
    </>
  );
};

export default AllNGOS;
