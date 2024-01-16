import { useState, useEffect } from "react";
import { getArtistInfo } from "../../../../utils/SpotifyAPI/SpotifyAPI";
import artistBackground from "../../../../images/artistBioBackground.png";

function ArtistHero({ id, token, favoriteProps, loggedIn, popupMessage }) {
  const [artistInfo, setArtistInfo] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);



  useEffect(() => {
    getArtistInfo({ token, id }).then((data) => {
      setArtistInfo(data);
    });
  }, [token, id]);

  const handleFavoriteArtist = () => {
    favoriteProps.onAddArtist({
      name: artistInfo.name,
      image: artistInfo?.images?.[0]?.url,
      followers: artistInfo?.followers?.total,
      spotifyId: artistInfo?.id
    });
    setShowPopup(true);
  };

  const favoriteBtn = () => {
    return (
      <button
        className="btn btn-sm bg-white/40  xl:btn xl:bg-white/40"
        onClick={handleFavoriteArtist}
      >
        Favorite Artist
        {showPopup && (
          <div className=" absolute bg-white text-black rounded p-1 font-bold font-sans text-sm">
            {popupMessage}
          </div>
        )}
      </button>
    );
  };

  const convertToStatNumber = () => {
    let num = artistInfo?.followers?.total;

    if (num < 1000) {
      return num.toString();
    } else if (num < 1000000) {
      return Math.floor(num / 1000) + " " + "k";
    } else if (num < 1000000000) {
      return Math.floor(num / 1000000) + " " + "Million";
    } else {
      return Math.floor(num / 1000000000) + " " + "Billion";
    }
  };

  const genreList = artistInfo?.genres;

  return (
    <div className="mt-[150px]">
      <div
        className="hero rounded-badge border-2 border-white md:rounded-badge"
        style={{
          backgroundImage: `url(${artistBackground})`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={artistInfo?.images?.[0]?.url}
            alt={artistInfo?.name}
            className="rounded-badge border-black border-4 shadow-2xl w-[180px] md:w-[200px] lg:w-[200px] xl:w-[300px]"
          />
          <div className="pl-0 flex flex-col items-center  md:pl-10 md:block relative">
            <h1 className=" font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              {artistInfo?.name}
            </h1>
            <div className="py-3 md:py-6">
              <p className="font-mono font-semibold tracking-wide text-black text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Popularity
                <span className="text-white pl-2">
                  {artistInfo?.popularity} rating
                </span>
              </p>
              <p className="mt-[10px] font-mono text-xl font-semibold tracking-wide text-black md:text-2xl lg:text-3xl xl:text-4xl">
                Followers
                <span className="text-white ml-6 text-lg md:text-xl xl:text-3xl">
                  {convertToStatNumber()}
                </span>
              </p>
              <p className="mt-[10px] font-mono text-xl font-semibold tracking-wide text-black md:text-2xl lg:text-3xl xl:text-4xl">
                Genres:
                {
                  <div className="dropdown dropdown-hover">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn font-[Poppins] m-1 bg-transparent border-none text-2xl md:text-3xl xl:text-4xl text-white  hover:bg-transparent hover:text-black"
                    >
                      More
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-slate-600 rounded-box w-44 border-black border-2"
                    >
                      {genreList &&
                        genreList.map((genre, index) => {
                          return (
                            <li
                        
                              key={index}
                            >
                              <span className="text-white hover:text-violet-500 font-[Oswald] font-bold text-base">{genre}</span>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                }
              </p>
            </div>
            {loggedIn && favoriteBtn()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistHero;


