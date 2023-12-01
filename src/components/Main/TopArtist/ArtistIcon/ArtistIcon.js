function ArtistIcon ({data}) {
  return (
    <li key={data.name} className="">
         <div className="flex flex-col w-[250px]  items-center">
            <img
              src={data.image}
              alt={data.name}
              className="rounded-lg w-[170px] h-[170px] "
            />
            <h3 className="font-semibold font-['Poppins'] mt-2">{data.name}</h3>
            <p className="font-semibold">Followers: {data.followers}</p>
          </div>
    </li>
   
  )
}

export default ArtistIcon