function ArtistIcon({ data }) {
  
  return (
    <div className="flex justify-center flex-col">
      <div className="items-center">
        <div className="w-[170px] h-[170px]">
          <img
            src={data?.images[0]?.url}
            alt={data.name}
            className="rounded-lg h-full w-full object-cover "
          />
        </div>
      </div>

      <div className="max-w-[200px]">
        <h3 className="font-semibold font-['Poppins'] mt-3 truncate">
          {data.name}
        </h3>
        <p className="font-semibold">Followers: {data.followers.total}</p>
      </div>
    </div>
  );
}

export default ArtistIcon;
