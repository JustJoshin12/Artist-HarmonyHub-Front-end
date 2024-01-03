import heart from "../../../../../images/heart.png";
import activeHeart from "../../../../../images/heartActive.png";

const ArtistAddButton = ({ onAdd, data, isFavorite, onToggle }) => {
  const heartIcon = isFavorite ? activeHeart : heart;

  return (
    <div className="relative my-auto">
      <button className="hover:scale-125" onClick={onToggle}>
        <img src={heartIcon} className="w-6 h-6" alt="bookmark" />
      </button>
    </div>
  );
};

export default ArtistAddButton;
