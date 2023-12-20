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
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { checkToken, register, signin } from "../../utils/auth";
import UserDataContext from "../contexts/userDataContext";
import {
  editUserProfile,
  getFavoriteArtists,
  getFavoriteAlbums,
  getFavoriteTracks,
  addFavortieTrack,
  addFavortieArtist,
  addFavortieAlbum,
  deleteFavoriteAlbum,
  deleteFavoriteTrack,
  deleteFavoriteArtist,
} from "../../utils/api";
import arrow from "../../images/uparrow.png";

function App() {
  const history = useHistory();
  const [activeModal, setActiveModal] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [topArtistData, setTopArtistData] = useState([]);
  const [newReleaseData, setNewReleaseData] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [favoriteArtists, setFavoriteArtists] = useState([]);
  const [favoriteTracks, setFavoriteTracks] = useState([]);
  const [favoriteAlbums, setFavoriteAlbums] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
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

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      checkToken(token)
        .then((data) => {
          setCurrentUser(data);
          setLoggedIn(true);
        })
        .catch(() => console.error);
    } else {
      localStorage.removeItem("jwt");
      setLoggedIn(false);
    }
  }, [loggedIn, history]);

  useEffect(() => {
    if (loggedIn) {
      getFavoriteArtists()
        .then((res) => {
          setFavoriteArtists(res);
        })
        .catch((err) => {
          console.error(err);
        });
      getFavoriteTracks().then((res) => {
        setFavoriteTracks(res);
      });
      getFavoriteAlbums()
        .then((res) => {
          setFavoriteAlbums(res);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      return;
    }
  }, [loggedIn]);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const handleLogOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/");
  };

  const handleRegistration = ({ name, userName, password, email, avatar }) => {
    register({
      name: name,
      userName: userName,
      password: password,
      email: email,
      avatar: avatar,
    })
      .then((res) => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = ({ email, password }) => {
    signin({ email, password }).then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);

        checkToken(data.token)
          .then((data) => {
            setLoggedIn(true);
            setCurrentUser(data);
            handleCloseModal();
            history.push("/favorites");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return;
      }
    });
  };

  const handleUpdate = ({ name, avatar, userName }) => {
    editUserProfile({ name, avatar, userName })
      .then((res) => {
        setCurrentUser(res);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDeleteArtist = (data) => {
    deleteFavoriteArtist(data)
      .then(() => {
        const newFavoriteArtists = favoriteArtists.filter((artist) => {
          return artist._id !== data._id;
        });
        setFavoriteArtists(newFavoriteArtists);
      })
      .catch((err) => {
        console.error(err.status);
      });
  };

  const onAddArtist = ({ name, image, followers }) => {
    addFavortieArtist({ name, image, followers })
      .then((data) => {
        setFavoriteArtists([data, ...favoriteArtists]);
      })
      .catch((err) => {
        console.error(err.status);
      });
  };

  const onDeleteTrack = (data) => {
    deleteFavoriteTrack(data)
      .then(() => {
        const newFavoriteTracks = favoriteTracks.filter((track) => {
          return track._id !== data._id;
        });
        setFavoriteTracks(newFavoriteTracks);
      })
      .catch((err) => {
        console.error(err.status);
      });
  };

  const onAddTrack = (data) => {
    addFavortieTrack(data)
      .then((data) => {
        setFavoriteTracks([...favoriteTracks, data]);
      })
      .catch((err) => {
        console.error(err.status);
      });
  };

  const onDeleteAlbum = (data) => {
    deleteFavoriteAlbum(data)
      .then(() => {
        const newFavoriteAlbums = favoriteAlbums.filter((album) => {
          return album._id !== data._id;
        });
        setFavoriteAlbums(newFavoriteAlbums);
      })
      .catch((err) => {
        console.error(err.status);
      });
  };

  const onAddAlbum = (data) => {
    addFavortieAlbum(data)
      .then((data) => {
        setFavoriteAlbums([data, ...favoriteAlbums]);
      })
      .catch((err) => {
        console.error(err.status);
      });
  };

  const favoriteProps = {
    onAddAlbum,
    onAddArtist,
    onAddTrack,
    onDeleteAlbum,
    onDeleteArtist,
    onDeleteTrack,
    favoriteAlbums: favoriteAlbums,
    favoriteArtists: favoriteArtists,
    favoriteTracks: favoriteTracks,
  };

  return (
    <UserDataContext.Provider value={currentUser}>
      <div className="bg-black py-3 md:p-3 text-white flex flex-col items-center ">
        <Header
          onEditModal={handleEditModal}
          onLoginModal={handleLoginModal}
          onRegisterModal={handleRegisterModal}
          loggedIn={loggedIn}
          onLogOut={handleLogOut}
        />
        <Main
          topArtistData={topArtistData}
          newReleaseData={newReleaseData}
          recommendations={recommendations}
          token={authToken}
          loggedIn={loggedIn}
          favoriteProps={favoriteProps}
        />
        <Footer />
        {isVisible && (
          <button
            className="text-base  font-[Poppins] fixed bottom-4 right-4 2xl:right-10 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={scrollToTop}
          >
            Scroll to top
          </button>
        )}
        {activeModal === "edit" && (
          <EditProfileModal
            onClose={handleCloseModal}
            isOpen={activeModal === "edit"}
            handleUpdate={handleUpdate}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            onClose={handleCloseModal}
            isOpen={activeModal === "login"}
            handleLogin={handleLogin}
          />
        )}
        {activeModal === "register" && (
          <RegisterModal
            onClose={handleCloseModal}
            isOpen={activeModal === "register"}
            handleRegistration={handleRegistration}
          />
        )}
      </div>
    </UserDataContext.Provider>
  );
}

export default App;
