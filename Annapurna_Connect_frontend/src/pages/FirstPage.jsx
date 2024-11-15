const FirstPage = () => {
  return (
    <>
      <div className="wrapper">
        <img className="logo" src="/images/logofinal.jpg" alt="" />
      </div>

      <style >
        {`
          .wrapper {
            background-color: #fedb67;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .logo {
            height: 140px;
          }
        `}
      </style>
    </>
  );
};

export default FirstPage;
