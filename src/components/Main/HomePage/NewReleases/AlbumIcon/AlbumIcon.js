function AlbumIcon({ data, section, buttonText, favoriteProps, loggedIn }) {
 
  const handleButtonAction = () => {
  if(buttonText === "Favorite" && (section === "new releases" || section === "search albums")) {
    favoriteProps.onAddAlbum({
      name: data?.name,
      image: data?.images[0]?.url,
      artist: data?.artists[0]?.name,
      totalTracks: data?.total_tracks
    })
  } else {
    favoriteProps.onDeleteAlbum(data)
  }
 }


 const image = () => {
  if (section === "favorite") {
    return data?.image;
  } else {
    return data?.images[0]?.url;
  }
 };

 const artist = () => {
    if (section === "favorite") {
      return data?.artist;
    } else {
      return data?.artists[0]?.name;
    }
 };
 
 const trackNumber = () => {
  if (section === "favorite") {
    return data?.totalTracks
  } else {
    return data?.total_tracks
  }
 }

 const likeBtn = () => {
  return(<button className="btn btn-sm btn-primary text-base font-[Poppins]" onClick={handleButtonAction}>{buttonText}</button>)
 }


  return (
    <div className="card w-[290px] bg-gray-700/50 shadow-lg shadow-white/50 md:w-80 hover:scale-105 ease-in-out duration-200">
      <figure className="px-8 py-8">
        <img
          src={image()}
          alt={data.name}
          className="rounded-xl shadow-lg shadow-black"
        />
      </figure>
      <div className="card-body relative items-center text-center pt-2">
        <h2 className="card-title font-bold text-2xl mb-2">{artist()}</h2>
        <p className="text-lg font-semibold font-[Poppins] mb-2">{data.name}</p>
        <div className="card-actions mr-40">
          {loggedIn && likeBtn()}
        </div>
        <div className="absolute bottom-6 right-2 pt-4 pr-2">
          <span className="badge font-bold">tracks {trackNumber()}</span>
        </div>
      </div>
    </div>
  );
}

export default AlbumIcon;
