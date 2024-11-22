const Alibi = ({ character }) => {
    if (!character) return <p>No alibi available.</p>;
    return <p className="text-[18px] text-justify my-3">{character.alibi}</p>;
  };
  
  export default Alibi;
  