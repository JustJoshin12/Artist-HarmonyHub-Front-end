import HomePage from "./HomePage/HomePage";
import SearchArtist from "./SearchArtistPage/SearchArtistPage";
import FavoritePage from "./FavoritePage/FavoritePage";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function Main({
  topArtistData,
  newReleaseData,
  token,
  recommendations,
  favoriteProps,
  loggedIn,
}) {
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
              favoriteProps={favoriteProps}
              loggedIn={loggedIn}
            />
          )}
        />

        <Route
          path="/artist"
          render={() => (
            <SearchArtist
              token={token}
              favoriteProps={favoriteProps}
              loggedIn={loggedIn}
            />
          )}
        />

        <ProtectedRoute path="/favorites">
          <FavoritePage
            favoriteProps={favoriteProps}
            loggedIn={loggedIn}
          />
        </ProtectedRoute>

        <Redirect to="/" />
      </Router>
    </main>
  );
}

export default Main;
