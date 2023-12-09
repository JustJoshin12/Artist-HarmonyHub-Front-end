import TopArtist from "./TopArtist/TopArtist";
import NewReleases from "./NewReleases/NewReleases";
import Recommendation from "./Recommendations/Recommendations";

function HomePage({topArtistData, newReleaseData}) {
  return (
    <div className="w-[340px] md:w-[730px] lg:w-[950px] xl:w-[1300px]">
      <TopArtist topArtistData={topArtistData}/>
      <NewReleases newReleaseData={newReleaseData}/>
      <Recommendation/>
    </div>
  );
}

export default HomePage;
