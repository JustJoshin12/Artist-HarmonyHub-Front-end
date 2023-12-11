import Logo from "../../images/websiteLogo.png";
import NavBar from "./NavBar/NavBar";
import UserInfoIcon from "./UserInfo/UserInfo";
import { useState } from "react";

function Header({ onEditModal, onLoginModal, onRegisterModal, onNavClick }) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header className="w-[80%] flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-3 md:w-[70%]">
      <div className="flex items-center justify-start mt-6 md:justify-normal">
        <h1 className="text-3xl font-bold text-white font-['Oswald'] md:text-2xl lg:text-3xl xl:text-5xl">
          Artist HarmonyHub
        </h1>
        <img
          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-20 xl:h-20"
          src={Logo}
          alt="website logo"
        />
      </div>
      {loggedIn ? (
        <UserInfoIcon />
      ) : (
        <div className="grid grid-cols-2 my-auto justify-end p-2 items-center">
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

      <NavBar onEdit={onEditModal} onNavClick={onNavClick}/>
    </header>
  );
}

export default Header;
