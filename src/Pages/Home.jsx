import StartMan from "../assets/StartMan.png";

const buttonStyle = {
  height: "140px",
  width: "250px",
};

const divStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "90vh",
};

const HomePage = () => {
  return (
    <>
      <div style={divStyle}>
        <a href="game">
          <img src={StartMan} style={buttonStyle} />
        </a>
      </div>
    </>
  );
};

export default HomePage;
