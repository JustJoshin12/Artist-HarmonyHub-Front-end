import { useState, useEffect } from "react";

function AlbumIcon({
  data,
  section,
  buttonText,
  favoriteProps,
  loggedIn,
  popupMessage,
}) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleButtonAction = () => {
    if (
      buttonText === "Favorite" &&
      (section === "new releases" || section === "search albums")
    ) {
      favoriteProps.onAddAlbum({
        name: data?.name,
        image: data?.images[0]?.url,
        artist: data?.artists[0]?.name,
        totalTracks: data?.total_tracks,
      });
    } else {
      favoriteProps.onDeleteAlbum(data);
    }
    setShowPopup(true);
  };

  const image = () => {
    if (section === "favorite") {
      return data?.image;
    } else {
      return data?.images[0]?.url;
    }
  };

  const artist = () => {
    if (section === "favorite") {
      return data?.artist;
    } else {
      return data?.artists[0]?.name;
    }
  };

  const trackNumber = () => {
    if (section === "favorite") {
      return data?.totalTracks;
    } else {
      return data?.total_tracks;
    }
  };

  const likeBtn = () => {
    return (
      <button
        className="btn btn-sm btn-primary text-base font-[Poppins]"
        onClick={handleButtonAction}
      >
        {buttonText}
        {showPopup && (
          <div className=" absolute bg-black text-white rounded p-1 font-bold font-sans text-sm">
            {popupMessage}
          </div>
        )}
      </button>
    );
  };

  return (
    <div className="card w-[290px] bg-gray-800/40 shadow-lg shadow-white/50 md:w-80 hover:scale-105 ease-in-out duration-200 hover:bg-gray-400 hover:text-black">
      <figure className="px-8 py-8">
        <img
          src={image()}
          alt={data.name}
          className="rounded-xl shadow-lg shadow-black"
        />
      </figure>
      <div className="card-body relative items-center text-center pt-2">
        <h2 className="card-title font-bold text-2xl mb-2">{artist()}</h2>
        <p className="text-lg font-semibold font-[Poppins] mb-2">{data.name}</p>
        <div className="card-actions mr-40">{loggedIn && likeBtn()}</div>
        <div className="absolute bottom-6 right-2 pt-4 pr-2">
          <span className="badge font-bold">tracks {trackNumber()}</span>
        </div>
      </div>
    </div>
  );
}

export default AlbumIcon;
