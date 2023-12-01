function AlbumIcon({ data }) {
  return (
    <li>
      <div className="w-[350px]">
        <img src={data.image} alt={data.name} className="w-[100%] rounded-lg h-[220px]" />
        <div className="px-6 pt-2">
          <p className=" text-lg font-semibold font-[Poppins]">{data.name}</p>
        
          <div className="flex flex-row justify-between">
            <p className="font-[Poppins]">
              {data.artist}
            </p>
            <span className="font-[Poppins]">Released {data.releaseDate}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default AlbumIcon;
