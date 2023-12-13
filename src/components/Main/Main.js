import HomePage from "./HomePage/HomePage";
import SearchArtist from "./SearchArtistPage/SearchArtistPage";
import FavoritePage from "./FavoritePage/FavoritePage";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";

function Main({ topArtistData, newReleaseData, token, recommendations }) {
  return (
    <main className=" mt-20 mx-auto">
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <HomePage
              topArtistData={topArtistData}
              newReleaseData={newReleaseData}
              recommendations={recommendations}
              token={token}
            />
          )}
        />

        <Route
          path="/artist"
          render={() => <SearchArtist token={token} />}
        />

        <Route
          path="/favorites"
          render={() => <FavoritePage/>}
        />
        <Redirect to="/" />
      </Router>
    </main>
  );
}

export default Main;



