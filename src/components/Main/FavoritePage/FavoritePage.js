import FavoriteArtist from "./FavoriteArtist/FavoriteArtist";
import FavoriteTrack from "./FavoriteTrack/FavoriteTrack";
import FavoriteAlbums from "./FavoriteAlbum/FavoriteAlbum";

function FavoritePage() {
  return (
    <div className="max-w-[290px] min-[420px]:max-w-[400px] sm:max-w-[600px] md:max-w-[730px] lg:max-w-[950px] xl:max-w-[1300px]">
      <FavoriteArtist />
      <FavoriteTrack/>
    </div>
  );
}

export default FavoritePage;
