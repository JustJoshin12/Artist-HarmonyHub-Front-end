import SearchBar from "./SearchBar/SearchBar";

import ArtistHero from "./ArtistHero/ArtistHero";
import TopTracks from "./TopTracks/TopTracks";
import AlbumIcon from "../HomePage/NewReleases/AlbumIcon/AlbumIcon";
import { artistAlbums } from "../../../utils/constant";
import RelatedArtists from "./RelatedArtist/RelatedArtist";



function SearchArtist() {
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="w-[1300px] mt-12">
      <div className="px-20">
        <h1 className="mb-9 text-3xl font-semibold text-white font-['Poppins'] tracking-wide pl-4">
          Search For Artist
        </h1>
        <SearchBar onSearch={handleSearch} />
      </div>
     <ArtistHero/>
     <TopTracks/>
     <div> 
      <p className="text-4xl font-[Poppins] font-semibold mb-10">Albums</p>
      <ul className="grid mb-14 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {artistAlbums.map((album) => {
          return(
            <AlbumIcon key={album.artist} data={album}></AlbumIcon>
          )
        } )}
      </ul>
     </div>
     <RelatedArtists/>
    </div>
  );
}

export default SearchArtist;
