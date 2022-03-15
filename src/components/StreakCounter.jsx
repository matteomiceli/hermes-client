import { motion } from "framer-motion";
import PartialCircle from "../assets/PartialCircle";
const purple = 'linear-gradient(180deg, #8241F9 0%, #4E277B 100%)'
const red = 'linear-gradient(25deg, #d64c7f, #ee4758 50%)'
const blue = 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
const StreakCounter = ({ streak, inc, streakTab, setStreakTab }) => {
  
  const boxStyle = {
    height: "120px",
    width: "120px",
    background: streak >= 10 && streak < 20 ? red : streak >= 20 ? blue : purple,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: 'relative',
  };

  const xStyle = {
    color: "white",
    fontSize: "32px",
    margin: "0",
  };

  const outerCircle = {
    position: 'absolute',
    width: 400,
    height: 400,
    borderRadius: '50%',
    zIndex: -1
  }

  console.log(streakTab)
  return (
    <>
      <motion.div style={boxStyle}>
        {[...Array(100).keys()].map((i) => {
          return (
            <>
              {(i%10)+1 <= (streak%10) &&
                <motion.div
                  initial={{ rotate: (36 * (i%10)) - 90 }}
                  style={outerCircle}
                >
                  <PartialCircle
                    initial={{
                      position: "absolute",
                      zIndex: 1,
                      top: i+1 <= streakTab?"50%":"60%",
                      left: i+1 <= streakTab?"50%":"100%"
                    }}
                    animate={{
                      top: '50%',
                      left: '50%',
                    }}
                  />
                </motion.div>
              }
            </>
          );
        })}
        <p style={xStyle}>Streak</p>
        <p style={xStyle}>{streak}</p>
      </motion.div>
    </>
  );
};

export default StreakCounter;
