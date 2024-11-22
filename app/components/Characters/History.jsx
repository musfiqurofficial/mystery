const History = ({ character }) => {
  if (!character) return <p>No history available.</p>;
  return <p className="text-[18px] text-justify my-3">{character.history}</p>;
};

export default History;
