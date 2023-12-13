import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import LoginModal from "../LoginModal/Login";
import RegisterModal from "../RegisterModal/RegisterModal";
import {
  getToken,
  getTopArtistData,
  getNewReleaseData,
  getRecommendations,
} from "../../utils/SpotifyAPI/SpotifyAPI";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [topArtistData, setTopArtistData] = useState([]);
  const [newReleaseData, setNewReleaseData] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleEditModal = () => {
    setActiveModal("edit");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  useEffect(() => {
    getToken()
      .then((data) => {
        setAuthToken(data.access_token);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    // if not authToken, then don't make the request
    if (authToken === "") {
      return;
    } else {
      getTopArtistData(authToken)
        .then((data) => {
          setTopArtistData(data.artists.items);
        })
        .catch((err) => {
          console.error(err);
        });

      getNewReleaseData(authToken)
        .then((data) => {
          setNewReleaseData(data.albums.items);
        })
        .catch((err) => {
          console.error(err);
        });

      getRecommendations(authToken)
        .then((res) => {
          setRecommendations(res?.albums?.items);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [authToken]);

  return (
    <div className="bg-black py-3 md:p-3 text-white flex flex-col items-center ">
      <Header
        onEditModal={handleEditModal}
        onLoginModal={handleLoginModal}
        onRegisterModal={handleRegisterModal}
      />
      <Main
        topArtistData={topArtistData}
        newReleaseData={newReleaseData}
        recommendations={recommendations}
        token={authToken}
      />
      <Footer />
      {activeModal === "edit" && (
        <EditProfileModal onClose={handleCloseModal} />
      )}
      {activeModal === "login" && <LoginModal onClose={handleCloseModal} />}
      {activeModal === "register" && (
        <RegisterModal onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
