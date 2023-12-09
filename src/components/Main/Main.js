import HomePage from "./HomePage/HomePage";
import SearchArtist from "./SearchArtistPage/SearchArtistPage";
import FavoritePage from "./FavoritePage/FavoritePage";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";

function Main({topArtistData, newReleaseData, token}) {
  return (
    <main className=" mt-20 max-w-[1300px] mx-auto">
      <Switch>
        <Route exact path='/'>
          <HomePage topArtistData={topArtistData} newReleaseData={newReleaseData}/>
        </Route>
        <Route path='/artist'>
          <SearchArtist token={token}/>
        </Route>
        <Route path='/favorites'>
          <FavoritePage />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
