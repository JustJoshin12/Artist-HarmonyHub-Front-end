function AlbumIcon({ data }) {
  return (
    <div className=" bg-gray-600 rounded overflow-hidden border-2 border-gray-700  hover:scale-125 ease-linear duration-200  w-[300px]">
      <img
        className="w-full h-36 object-center"
        src={data?.images[0]?.url}
        alt={data.name}
      />

      <div className="p-3 relative">
        <h4 className="font-bold text-2xl text-black">
          {data?.artists[0]?.name}
        </h4>
        <p className="py-2 text-md font-semibold font-[Poppins] text-black">
          {data.name}
        </p>
        <div className="absolute top-0 right-0 pt-4 pr-2">
          <span className="badge font-bold">tracks {data.total_tracks}</span>
        </div>
      </div>
    </div>
  );
}

export default AlbumIcon;
