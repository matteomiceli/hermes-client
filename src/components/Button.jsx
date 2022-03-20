import React from "react";
import { motion } from "framer-motion";

const buttonStyle = {
  background: "linear-gradient(180deg, #8241F9 0%, #4E277B 100%)",
  height: "50px",
  width: "220px",
  fontSize: "18px",
  borderRadius: "8px",
  color: "white",
  padding: "5px 10px",
  border: "1px solid #150A27",
  cursor: "pointer",
};

const Button = ({ newGame }) => (
  <motion.button
    whileTap={{scale: 0.94}}
    type="button"
    className="btn btn-default"
    style={buttonStyle}
    onClick={() => newGame()}
  >
    New Game
  </motion.button>
);

export default Button;
