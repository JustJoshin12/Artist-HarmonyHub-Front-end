
import AlbumIcon from "../../HomePage/NewReleases/AlbumIcon/AlbumIcon";

function FavoriteAlbums({ favoriteAlbums, favoriteProps, loggedIn }) {
  return (
    <section className="md:h-full flex mb-16 flex-col">
      <h3 className="mb-8 text-3xl font-[Poppins] font-bold xl:text-4xl">
        Favorite Albums
      </h3>
      {favoriteAlbums.length === 0 ? (
        <p className="text-3xl text-gray-800/80 font-bold min-h-[150px] text-center pt-14 font-[Poppins] md:text-4xl lg:text-5xl xl:text-6xl">No Favorite Albums</p>
      ) : (
        <ul className="grid gap-10 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favoriteAlbums.map((data) => {
            return <AlbumIcon key={data._id} data={data} section="favorite" buttonText="Unfavorite" favoriteProps={favoriteProps} loggedIn={loggedIn}/>;
          })}
        </ul>
      )}
    </section>
  );
}

export default FavoriteAlbums;
