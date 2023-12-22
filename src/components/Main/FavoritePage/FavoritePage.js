import FavoriteArtist from "./FavoriteArtist/FavoriteArtist";
import FavoriteTrack from "./FavoriteTrack/FavoriteTrack";
import FavoriteAlbums from "./FavoriteAlbum/FavoriteAlbum";


function FavoritePage({ favoriteProps, loggedIn }) {
  return (
    <div className="w-[290px] min-[420px]:w-[400px] sm:w-[600px] md:w-[730px] lg:w-[950px] xl:w-[1300px]">
      <FavoriteArtist favoriteArtists={favoriteProps.favoriteArtists} onDelete={favoriteProps.onDeleteArtist} favoriteProps={favoriteProps} loggedIn={loggedIn}/>
      <FavoriteTrack favoriteTracks={favoriteProps.favoriteTracks} favoriteProps={favoriteProps} loggedIn={loggedIn}/>
      <FavoriteAlbums favoriteAlbums={favoriteProps.favoriteAlbums} favoriteProps={favoriteProps} loggedIn={loggedIn}/>
    </div>
  );
}

export default FavoritePage;
