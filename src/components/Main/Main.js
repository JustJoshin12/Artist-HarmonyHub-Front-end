import HomePage from "./HomePage/HomePage";
import SearchArtist from "./SearchArtistPage/SearchArtistPage";
import FavoritePage from "./FavoritePage/FavoritePage";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";

function Main({ topArtistData, newReleaseData, token }) {
  return (
    <main className=" mt-20 max-w-[1300px] mx-auto">
      <Router>
        <Route
          exact
          path="/Artist-HarmonyHub-Front-end"
          render={() => (
            <HomePage
              topArtistData={topArtistData}
              newReleaseData={newReleaseData}
            />
          )}
        />

        <Route
          path="/Artist-HarmonyHub-Front-end/artist"
          render={() => <SearchArtist token={token} />}
        />

        <Route
          path="/Artist-HarmonyHub-Front-end/favorites"
          component={() => <FavoritePage />}
        />
        <Redirect to="/Artist-HarmonyHub-Front-end/artist" />
      </Router>
    </main>
  );
}

export default Main;
