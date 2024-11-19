import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  const button={
    background: '#fb7e00',
    borderRadius: '10px',
    textDecoration: 'none',
    color: 'white',
    fontWeight: '500',
    padding: '8px 130px',
  };
  return (
    <>
      <Link style={button} to={link}>
        {text}
      </Link>

    </>
  );
};

export default Button;
