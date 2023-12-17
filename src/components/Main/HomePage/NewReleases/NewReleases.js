import AlbumIcon from "./AlbumIcon/AlbumIcon";

function NewReleases({ newReleaseData, favoriteProps, loggedIn }) {
  return (
    <section className="mx-auto py-5 my-14 ">
      <h3 className="mb-9 text-3xl font-semibold text-white font-['Poppins'] tracking-wide pl-4">
        New Releases
      </h3>
      <ul className="grid gap-10 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {newReleaseData.map((item) => {
          return <AlbumIcon key={item.id} data={item} section="new releases" buttonText="Favorite" favoriteProps={favoriteProps} loggedIn={loggedIn}/>;
        })}
      </ul>
    </section>
  );
}

export default NewReleases;
