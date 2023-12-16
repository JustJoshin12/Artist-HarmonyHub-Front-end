import trashCan from "../../../../../images/trash-can.png";

const ArtistDeleteButton = ({ onDelete, data }) => {
  const deleteArtist = () => {
    onDelete(data);
  };
  return (
    <button className="hover:scale-125" onClick={deleteArtist}>
      <img src={trashCan} className="w-6 h-6" alt="trash can" />
    </button>
  );
};

export default ArtistDeleteButton;
