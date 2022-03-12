export default function QuoteDisplay({ text }) {
  const quoteText = {
    color: "white",
    fontSize: "2rem",
    textAlign: "center",
    padding: "3rem",
  };

  const quoteBg = {
    background: "#181818",
    width: "80%",
    margin: "auto",
    borderRadius: "15px",
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={quoteBg}>
        <h2 style={quoteText}>{text}</h2>
      </div>
    </div>
  );
}
