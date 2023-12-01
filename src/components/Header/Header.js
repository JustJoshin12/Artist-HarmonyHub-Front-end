import Logo from "../../images/websiteLogo.png";
import NavBar from "./NavBar/NavBar";
import UserInfoIcon from "./UserInfo/UserInfo";

function Header() {
  return (
    <header className="grid grid-cols-2 grid-rows-2 px-14">
      <div className="flex items-center">
        <h1 className="text-5xl font-bold text-white font-['Oswald']">Artist HarmonyHub</h1>
        <img className="w-20 h-20" src={Logo} alt="website logo" />
      </div>
      <UserInfoIcon />
      <NavBar />
    </header>
  );
}

export default Header;
