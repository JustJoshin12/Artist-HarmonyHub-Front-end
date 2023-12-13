

function ArtistIcon({ data, section }) {
  
  const image = () => {
    if (section === "favorite") {
      return data.image;
    } else {
      return data?.images[0]?.url;
    }
  };

  const followers = () => {
    if (section === "favorite") {
      return data.followers;
    } else {
      return data.followers.total;
    }
  };

  return (
    <div className="flex items-center flex-col">
      <div className="">
        <div className="w-[170px] h-[170px]">
          <img
            src={image()}
            alt={data.name}
            className="rounded-lg h-full w-full object-cover "
          />
        </div>
      </div>

      <div className="w-[170px]">
        <h3 className="font-semibold font-['Poppins'] mt-3 truncate">
          {data.name}
        </h3>
        <p className="font-semibold">Followers: {followers()}</p>
      </div>
    </div>
  );
}

export default ArtistIcon;
