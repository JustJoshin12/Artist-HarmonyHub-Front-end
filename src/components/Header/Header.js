import Logo from "../../images/websiteLogo.png";
import NavBar from "./NavBar/NavBar";
import UserInfoIcon from "./UserInfo/UserInfo";
import UserDataContext from "../contexts/userDataContext";
import { useContext } from "react";
import heroImage from "../../images/heroImage.png";

function Header({
  onEditModal,
  onLoginModal,
  onRegisterModal,
  onLogOut,
  loggedIn,
}) {
  const currentUser = useContext(UserDataContext);

  return (
    <header className="w-[80%] flex flex-col md:w-[70%]">
      <div className="flex flex-col mb-10 justify-between min-[580px]:flex-row">
        <div className="flex items-center justify-start mt-6 mb-2 md:justify-normal">
          <h1 className="text-2xl font-bold text-white font-['Oswald'] md:text- lg:text-4xl xl:text-5xl">
            Artist HarmonyHub
          </h1>
          <img
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-20 xl:h-20"
            src={Logo}
            alt="website logo"
          />
        </div>
        {loggedIn ? (
        <UserInfoIcon data={currentUser} />
      ) : (
        <div className="grid grid-cols-2 my-auto justify-end p-2 items-center mt-5">
          <button
            className="btn  btn-md bg-transparent text-white text-2xl border-none hover:bg-fuchsia-900 hover:border-none "
            onClick={onRegisterModal}
          >
            Register
          </button>
          <button
            className="btn  btn-md bg-transparent text-white text-2xl border-none hover:bg-fuchsia-900 hover:border-none"
            onClick={onLoginModal}
          >
            Login
          </button>
        </div>
      )}
      </div>
      <div
        className=" min-h-[300px] sm:min-h-[330px] md:min-h-[450px]  rounded-badge bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-10 rounded-badge"></div>
        <div className=" text-center text-neutral-content flex-col z-10">
        <NavBar
            onEdit={onEditModal}
            onLogOut={onLogOut}
            loggedIn={loggedIn}
          />
          <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row p-3">
            <h1 className="ml-10 text-3xl xl:text-5xl font-bold font-[Oswald] lg:mr-14 xl:mr-32 text-indigo-700 ">
              Discover, Connect, Groove
            </h1>
            <p className="p-5 font-serif xl:text-lg font-semibold pt-2 opacity-60 hidden sm:block">
              Step into the world of music like never before at Artist
              HarmonyHub. Explore new artists and connect with like-minded
              individuals. Whether you're in search of the latest hits or
              undiscovered treasures, Artist HarmonyHub is your destination.
              Join us now and embark on a musical journey that celebrates the
              universal language of music.
            </p>
          </div>
         
        </div>
      </div>
    </header>
  );
}

export default Header;
