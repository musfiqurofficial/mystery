const Friend = ({ character }) => {
    if (!character) return <p>No alibi available.</p>;
    return <div>
        <p className="text-[18px] text-justify my-3">{character.alibi}</p>
    </div>;
  };
  
  export default Friend;
  