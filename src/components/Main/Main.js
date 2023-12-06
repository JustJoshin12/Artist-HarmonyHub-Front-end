import HomePage from "./HomePage/HomePage";
import SearchArtist from "./SearchArtistPage/SearchArtistPage";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";

function Main() {
  return (
    <main className=" mt-20 max-w-[1300px] mx-auto">
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route>
          <SearchArtist path='/artist' />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
