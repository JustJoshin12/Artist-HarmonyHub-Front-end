import { useState,useEffect } from "react";

function TrackCard({ data, buttonText, section, favoriteProps, loggedIn, popupMessage}) {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);



  const handleButtonAction = () => {
    if (buttonText === "favorite" && section === "recommendation") {
      setShowPopup(true);
      favoriteProps.onAddTrack({
        name: data?.name,
        image: data?.images[0]?.url,
      });
    } else if (buttonText === "favorite") {
      setShowPopup(true);
      favoriteProps.onAddTrack({
        name: data?.name,
        image: data?.album?.images[0]?.url,
      });
    } else {
      favoriteProps.onDeleteTrack(data);
    }
  };

  const image = () => {
    if (section === "recommendation") {
      return data?.images[0].url;
    } else if (section === "favorite") {
      return data?.image;
    } else {
      return data?.album?.images[0]?.url;
    }
  };

  const favoriteBtn = () => {
    return (
      <button
        className="btn text-md italic text-black mb-3 rounded-full h-7 bg-black/50"
        onClick={handleButtonAction}
      >
        {buttonText}
        {showPopup && (
          <div className=" absolute bg-white text-black rounded p-1 font-bold font-sans text-sm">
            {popupMessage}
          </div>
        )}
      </button>
    );
  };

  return (
    <div className="flex justify-center">
      <div className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-badge hover:shadow-xl hover:shadow-black/30 transition-shadow">
        <div className="h-[200px] w-[200px]">
          <img
            src={image()}
            alt="track cover"
            className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
          <p className="text-3xl font-bold text-white font-[Poppins] tracking-widest mb-2">
            More
          </p>
          <p className="text-lg font-[Poppins] font-semibold text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {data?.name}
          </p>
          {loggedIn && favoriteBtn()}
        </div>
      </div>
    </div>
  );
}

export default TrackCard;
