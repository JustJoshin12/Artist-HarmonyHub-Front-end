import HomePage from "./HomePage/HomePage";
import SearchArtist from "./SearchArtistPage/SearchArtistPage";
import FavoritePage from "./FavoritePage/FavoritePage";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";

function Main({topArtistData, newReleaseData, token}) {
  return (
    <main className=" mt-20 max-w-[1300px] mx-auto">
      <Switch>
        <Route exact path='/Artist-HarmonyHub-Front-end' >
          <HomePage topArtistData={topArtistData} newReleaseData={newReleaseData}/>
        </Route>
        <Route path='/Artist-HarmonyHub-Front-end/artist'>
          <SearchArtist token={token}/>
        </Route>
        <Route path='/Artist-HarmonyHub-Front-end/favorites'>
          <FavoritePage />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
