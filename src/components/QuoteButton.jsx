import React from "react";
import CheckMark from "../assets/CheckMark";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import XMark from "../assets/XMark";

function QuoteButton({
  quote = "Good vibes come from good people",
  handleFinalAnswer,
  answer = "",
}) {
  const controls = useAnimation()
  const startAnim = () => {
    controls.start(i => ({
      opacity: [0,1,0,1,0,1],
      transition: { delay: i * 0.3 },
    }))
  }
  // const stopAnim = () => controls.stop()
  
  const [pressed, setPressed] = React.useState(false)
  const quotePress = (quote) => {
    startAnim()
    handleFinalAnswer(quote)
    setPressed(true)
  }
  const button = {
    display: "flex",
    justifyContent: "flex-start",
    background: "linear-gradient(180deg, #414141 0%, #303030 100%)",
    alignItem: "center",
    textAlign: "center",
    padding: 30,
    paddingLeft: 30,
    paddingRight: 30,
    margin: "8px 0",
    width: "70%",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: 15,
    border: pressed?'1px solid rgba(255, 0, 0, 0.4)':''
  };
  const span = {
    flexGrow: 5,
  };
  const hidden = {translateX: '100vw'}
  // const visible = {display: 'block', visibility: 'visible', scale: 1, translateX: '0', opacity: 1}
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        {!pressed && (
          <motion.div
            whileTap={{ scale: 0.95 }}
            exit={hidden}
            transition={{ delay: 1 }}
            style={button}
            onClick={() => quotePress(quote)}
          >
            <span style={span}>{quote}</span>
            {quote === answer ? (
              <CheckMark animate={controls} />
            ) : (
              <XMark animate={controls} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default QuoteButton;
