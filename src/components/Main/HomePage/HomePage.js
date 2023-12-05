import TopArtist from "./TopArtist/TopArtist";
import NewReleases from "./NewReleases/NewReleases";
import Recommendation from "./Recommendations/Recommendations";

function HomePage() {
  return (
    <div>
      <TopArtist />
      <NewReleases />
      <Recommendation/>
    </div>
  );
}

export default HomePage;
