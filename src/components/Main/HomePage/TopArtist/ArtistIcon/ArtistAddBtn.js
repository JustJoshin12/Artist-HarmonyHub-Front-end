import React, { useState, useEffect } from "react";
import saveIcon from "../../../../../images/saveIcon.png";

const ArtistAddButton = ({ onAdd, data, popupMessage }) => {
  const [showPopup, setShowPopup] = useState(false);
  

  const artistInfo = {
    name: data?.name,
    image: data?.images[0]?.url,
    followers: data?.followers?.total,
  };

  const addArtist = () => {
    onAdd.onAddArtist(artistInfo);
    setShowPopup(true);
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="relative my-auto">
      <button className="hover:scale-125" onClick={addArtist}>
        <img src={saveIcon} className="w-6 h-6" alt="bookmark" />
      </button>
      {showPopup && (
        <div className=" absolute bg-violet-900 text-black rounded p-1 font-bold font-sans left-0 text-sm top-0">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default ArtistAddButton;
