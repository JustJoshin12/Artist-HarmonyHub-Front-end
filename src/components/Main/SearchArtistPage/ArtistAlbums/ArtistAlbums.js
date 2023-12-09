import AlbumIcon from "../../HomePage/NewReleases/AlbumIcon/AlbumIcon";
import { artistAlbums } from "../../../../utils/constant";

function ArtistAlbums () {
    return(
        <div className="my-[90px] mx-4"> 
        <p className="text-4xl font-[Poppins] font-semibold mb-10">Albums</p>
        <ul className="grid mb-14 gap-10 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {artistAlbums.map((album) => {
            return(
              <AlbumIcon data={album}></AlbumIcon>
            )
          } )}
        </ul>
       </div>
    )
}

export default ArtistAlbums