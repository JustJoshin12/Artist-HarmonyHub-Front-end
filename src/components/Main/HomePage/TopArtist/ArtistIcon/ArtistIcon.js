function ArtistIcon({ data }) {
  return (
    <div className="">
      <img
        src={data.image}
        alt={data.name}
        className="rounded-lg max-w-[170px] max-h-[170px] "
      />
      <h3 className="font-semibold font-['Poppins'] mt-3">{data.name}</h3>
      <p className="font-semibold">Followers: {data.followers}</p>
    </div>
  );
}

export default ArtistIcon;
