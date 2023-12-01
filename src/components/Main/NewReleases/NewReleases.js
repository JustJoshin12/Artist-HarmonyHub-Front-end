import AlbumIcon from "./AlbumIcon/AlbumIcon"
import { NewReleaseData } from "../../../utils/constant"

function NewReleases () {
    return (
        <section className="mx-6 py-5">
        <h3 className="mb-9 text-3xl font-semibold text-white font-['Poppins'] tracking-wide pl-4">
          New Releases
        </h3>
        <ul className="grid grid-cols-3 gap-10">
          {NewReleaseData.map((item) => {
            return (
                <AlbumIcon data={item}/>
            )
          })}
        </ul>
      </section>
    )
}

export default NewReleases