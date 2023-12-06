import AlbumIcon from "./AlbumIcon/AlbumIcon"
import { NewReleaseData } from "../../../../utils/constant"

function NewReleases () {
    return (
        <section className="mx-6 py-5 my-14">
        <h3 className="mb-9 text-3xl font-semibold text-white font-['Poppins'] tracking-wide pl-4">
          New Releases
        </h3>
        <ul className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {NewReleaseData.map((item) => {
            return (
                <AlbumIcon key={item.name} data={item}/>
            )
          })}
        </ul>
      </section>
    )
}

export default NewReleases