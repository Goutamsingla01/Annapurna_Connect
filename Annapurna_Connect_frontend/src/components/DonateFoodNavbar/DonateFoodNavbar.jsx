import { Link } from "react-router-dom";

import { RiArrowLeftSLine } from "react-icons/ri";

const DonateFoodNavbar = ({ link }) => {
  return (
    <>
      <div className="navbar">
        <Link className="link" to={link}>
          <RiArrowLeftSLine className="icon" />
        </Link>
        <p className="heading">Annapurna Connect</p>
      </div>
    </>
  );
};

export default DonateFoodNavbar;
