import React, { useState } from "react";
import heart from "../../../../../images/heart.png";
import heartActive from "../../../../../images/heartActive.png";

const ArtistAddButton = ({ onAdd, data }) => {
  const [isActive, setIsActive] = useState(false); 

  const artistInfo = {
    name: data?.name,
    image: data?.images[0]?.url,
    followers: data?.followers?.total,
  };

  const toggleHeart = () => {
    setIsActive(!isActive); 
  };

  const addArtist = () => {
    onAdd(artistInfo);
    toggleHeart(); 
  };

  return (
    <button className="hover:scale-125" onClick={addArtist}>
      <img src={isActive ? heartActive : heart} className="w-6 h-6" alt="heart" />
    </button>
  );
};

export default ArtistAddButton;

