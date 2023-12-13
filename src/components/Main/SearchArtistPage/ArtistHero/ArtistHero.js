import { useState, useEffect } from "react";
import { getArtistInfo } from "../../../../utils/SpotifyAPI/SpotifyAPI";

function ArtistHero({ id, token }) {
  const [artistInfo, setArtistInfo] = useState(null);

  useEffect(() => {
    getArtistInfo({ token, id }).then((data) => {
      setArtistInfo(data);
    });
  }, [token, id]);

  const handleFavoriteArtist = () => {
    console.log(artistInfo);
  };

  return (
    <div className="mt-[150px]">
      <div className="hero bg-violet-800/50 rounded-badge border-2 border-white md:rounded-full">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={artistInfo?.images[0].url}
            alt={artistInfo?.name}
            className="rounded-badge border-black border-4 shadow-2xl w-[180px] md:w-[200px] lg:w-[200px] xl:w-[300px]"
          />
          <div className="pl-0 flex flex-col items-center  md:pl-10 md:block">
            <h1 className=" font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              {artistInfo?.name}
            </h1>
            <div className="py-3 md:py-6">
              <p className="font-mono font-semibold tracking-wide text-black text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Popularity
                <span className="text-white">
                  {artistInfo?.popularity} rating
                </span>
              </p>
              <p className="mt-[10px] font-mono text-xl font-semibold tracking-wide text-black md:text-2xl lg:text-3xl xl:text-4xl">
                Followers
                <span className="text-white ml-6 text-lg md:text-xl xl:text-3xl">
                  {artistInfo?.followers?.total}
                </span>
              </p>
            </div>
            <button
              className="btn btn-sm bg-white/40  xl:btn xl:bg-white/40"
              onClick={handleFavoriteArtist}
            >
              Favorite Artist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistHero;
