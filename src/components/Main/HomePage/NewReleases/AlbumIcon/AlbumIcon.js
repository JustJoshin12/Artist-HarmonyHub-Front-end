function AlbumIcon({ data, section }) {
  return (
    <div className=" bg-indigo-900/70 rounded-badge overflow-hidden border-2 border-white/50  min-[375px]:hover:scale-100 sm:hover:scale-125 ease-linear duration-200 w-[270px] md:w-[300px]">
      <div className="h-[144px] w-[300px]">
        <img
          className="w-full h-full object-center"
          src={data?.images[0]?.url}
          alt={data.name}
        />
      </div>

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
