import SearchBar from "./SearchBar/SearchBar";

import ArtistHero from "./ArtistHero/ArtistHero";
import TopTracks from "./TopTracks/TopTracks";
import ArtistAlbums from "./ArtistAlbums/ArtistAlbums";
import RelatedArtists from "./RelatedArtist/RelatedArtist";
import { useState } from "react";
import { getArtistId } from "../../../utils/SpotifyAPI/SpotifyAPI";

function SearchArtist({ token }) {
  const [searchHistory, setSearchHistory] = useState(null);

  const handleSearch = (searchTerm) => {
    getArtistId(token, searchTerm).then((data) => {
      setSearchHistory(data.artists.items[0].id);
    });
  };

  return (
    <div className="mt-12 w-[340px] md:w-[730px] lg:w-[950px] xl:w-[1300px]">
      <div className="px-4 md:px-20">
        <h1 className="mb-9 text-xl font-semibold text-white font-['Poppins'] tracking-wide pl-4 md:text-3xl lg:pl-0">
          Search For Artist
        </h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      {searchHistory === null ? (
        <div className="mt-4">
          <h3 className="text-3xl text-gray-800/80 font-bold min-h-[150px] text-center pt-14 font-[Poppins] md:text-4xl lg:text-5xl xl:text-6xl">
            {" "}
            Search For An Artist
          </h3>
        </div>
      ) : (
        <div>
          <ArtistHero id={searchHistory} token={token} />
          <TopTracks id={searchHistory} token={token} />
          <ArtistAlbums id={searchHistory} token={token} />
          <RelatedArtists id={searchHistory} token={token} />
        </div>
      )}
    </div>
  );
}

export default SearchArtist;
