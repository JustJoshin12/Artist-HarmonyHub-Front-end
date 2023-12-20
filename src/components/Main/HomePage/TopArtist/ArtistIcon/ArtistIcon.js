import ArtistAddButton from "./ArtistAddBtn";
import ArtistDeleteButton from "./ArtistDeleteBtn";

function ArtistIcon({ data, section, favoriteProps, loggedIn }) {
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

  const likeBtn = () => {
    if (section === "favorite") {
      return (
        <ArtistDeleteButton
          onDelete={favoriteProps.onDeleteArtist}
          data={data}
        />
      );
    } else {
      return <ArtistAddButton onAdd={favoriteProps.onAddArtist} data={data} />;
    }
  };

  const convertToStatNumber = () => {

    let num = followers();

    if (num < 1000) {
      return num.toString();
    } else if (num < 1000000) {
      return Math.floor(num / 1000) + "k";
    } else if (num < 1000000000) {
      return Math.floor(num / 1000000) + "million";
    } else {
      return Math.floor(num / 1000000000) + "billion";
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

      <div className="w-[170px] p-2">
        <div className="flex flex-row justify-between">
          <h3 className="font-semibold font-['Poppins'] mt-3 truncate pb-1">
            {data.name}
          </h3>
          {loggedIn && likeBtn()}
        </div>
        <p className="font-semibold">Followers: {convertToStatNumber()}</p>
      </div>
    </div>
  );
}

export default ArtistIcon;
