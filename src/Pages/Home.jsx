import StartMan from "../assets/StartMan.png";

const buttonStyle = {
  position: "absolute",
  top: "300px",
  right: "50%",
  let: "50%",
  margin: "100",
  height: "140px",
  width: "250px",
};

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      {/* <a href="game">Play</a> */}

      <div>
        <a href="game">
          <img src={StartMan} style={buttonStyle} />
        </a>
      </div>
    </>
  );
};

export default HomePage;
