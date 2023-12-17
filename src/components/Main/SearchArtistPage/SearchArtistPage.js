import SearchBar from "./SearchBar/SearchBar";

import ArtistHero from "./ArtistHero/ArtistHero";
import TopTracks from "./TopTracks/TopTracks";
import ArtistAlbums from "./ArtistAlbums/ArtistAlbums";
import RelatedArtists from "./RelatedArtist/RelatedArtist";
import { useState } from "react";
import { getArtistId } from "../../../utils/SpotifyAPI/SpotifyAPI";

function SearchArtist({ token, favoriteProps, loggedIn }) {
  const [searchHistory, setSearchHistory] = useState(null);

  const handleSearch = (searchTerm) => {
    getArtistId(token, searchTerm)
    .then((data) => {
      setSearchHistory(data.artists.items[0].id);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  return (
    <div className="mt-12 ">
      <div className="px-3 mx-auto max-w-[1000px] xl:w-[1000px]">
        <h1 className="mb-12 text-xl font-semibold text-white font-['Poppins'] tracking-wide pl-4 md:text-3xl lg:pl-0">
          Search For Artist
        </h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      {searchHistory === null ? (
        <div className="mt-9">
          <h3 className="text-2xl text-gray-800/80 font-bold min-h-[150px] text-center pt-14 font-[Poppins] md:text-4xl lg:text-5xl xl:text-6xl">
            Search For An Artist
          </h3>
        </div>
      ) : (
        <div className="mx-auto max-w-[290px] min-[420px]:max-w-[400px] sm:max-w-[600px] md:max-w-[730px] lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1300px]">
          <ArtistHero id={searchHistory} token={token} favoriteProps={favoriteProps} loggedIn={loggedIn}/>
          <TopTracks id={searchHistory} token={token} favoriteProps={favoriteProps} loggedIn={loggedIn}/>
          <ArtistAlbums id={searchHistory} token={token} favoriteProps={favoriteProps} loggedIn={loggedIn}/>
          <RelatedArtists id={searchHistory} token={token} favoriteProps={favoriteProps} loggedIn={loggedIn}/>
        </div>
      )}
    </div>
  );
}

export default SearchArtist;
