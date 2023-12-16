import heart from "../../../../../images/heart.png";

const ArtistAddButton = ({ onAdd, data }) => {
  const artistInfo = {
    name: data?.name,
    image: data?.images[0]?.url,
    followers: data?.followers?.total,
  };
  const addArtist = () => {
    onAdd(artistInfo);
  };

  return (
    <button className="hover:scale-125" onClick={addArtist}>
      <img src={heart} className="w-6 h-6" alt="heart" />
    </button>
  );
};

export default ArtistAddButton;
