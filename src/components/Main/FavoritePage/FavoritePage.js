import FavoriteArtist from "./FavoriteArtist/FavoriteArtist";
import FavoriteTrack from "./FavoriteTrack/FavoriteTrack";
import FavoriteAlbums from "./FavoriteAlbum/FavoriteAlbum";

function FavoritePage() {
  return (
    <div className="w-[340px] md:w-[730px] lg:w-[950px] xl:w-[1300px]">
      <FavoriteArtist />
      <FavoriteTrack />
      <FavoriteAlbums />
    </div>
  );
}

export default FavoritePage;
