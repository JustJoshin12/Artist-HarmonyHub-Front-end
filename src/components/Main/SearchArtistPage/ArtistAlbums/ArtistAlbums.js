import AlbumIcon from "../../HomePage/NewReleases/AlbumIcon/AlbumIcon";
import { useState, useEffect } from "react";
import { getArtistAlbums } from "../../../../utils/SpotifyAPI/SpotifyAPI";

function ArtistAlbums({ id, token }) {
  const [artistAlbums, setArtistAlbums] = useState([]);

  useEffect(() => {
    getArtistAlbums({ token, id }).then((res) => {
      setArtistAlbums(res.items);
    });
  }, [token, id]);

  return (
    <div className="my-[90px] mx-4">
      <p className="text-4xl font-[Poppins] font-semibold mb-10">Albums</p>
      {artistAlbums.length === 0 ? (
        <div className="mt-4">
          <h3 className="text-3xl text-gray-800/80 font-bold min-h-[150px] text-center pt-14 font-[Poppins] md:text-4xl lg:text-5xl xl:text-6xl">
            No Artist Albums
          </h3>
        </div>
      ) : (
        <ul className="grid mb-14 gap-10 justify-center sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {artistAlbums.map((album) => {
            return <AlbumIcon data={album}></AlbumIcon>;
          })}
        </ul>
      )}
    </div>
  );
}

export default ArtistAlbums;
