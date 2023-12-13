import { NewReleaseData } from "../../../../utils/constant";
import AlbumIcon from "../../HomePage/NewReleases/AlbumIcon/AlbumIcon";

function FavoriteAlbums() {
  return (
    <section className="mb-16">
      <h3 className="mb-8 text-3xl font-[Poppins] font-bold xl:text-4xl">
        Favorite Albums
      </h3>
      <ul className="grid gap-10 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {NewReleaseData.map((data) => {
          return <AlbumIcon data={data} section="favorite" />;
        })}
      </ul>
    </section>
  );
}

export default FavoriteAlbums;
