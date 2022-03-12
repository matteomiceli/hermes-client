export default function QuoteDisplay({ text }) {
  const quoteText = {
    color: "white",
    fontSize: "2rem",
    textAlign: "center",
    padding: "4rem 4rem 0",
  };

  return (
    <div>
      <h2 style={quoteText}>{text}</h2>
    </div>
  );
}
