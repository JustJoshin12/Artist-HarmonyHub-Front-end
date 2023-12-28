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
  popupMessage,
  showMessage
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
              popupMessage={popupMessage}
              showMessage={showMessage}
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
              popupMessage={popupMessage}
            />
          )}
        />

        <ProtectedRoute path="/favorites"  favoriteProps={favoriteProps} loggedIn={loggedIn}>
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
