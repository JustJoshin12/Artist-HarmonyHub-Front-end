import TopArtist from "./TopArtist/TopArtist";
import NewReleases from "./NewReleases/NewReleases";
import Recommendation from "./Recommendations/Recommendations";

function HomePage({topArtistData, newReleaseData, token, recommendations}) {
  return (
    <div className="max-w-[290px] min-[420px]:max-w-[400px] sm:max-w-[600px] md:max-w-[730px] lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1300px]">
      <TopArtist topArtistData={topArtistData}/>
      <NewReleases newReleaseData={newReleaseData}/>
      <Recommendation token={token} recommendations={recommendations}/>
    </div>
  );
}

export default HomePage;
