import "./Header.css";
import Logo from "../../images/websiteLogo.png";
import NavBar from "./NavBar/NavBar";
import UserInfoIcon from "./UserInfo/UserInfo";

function Header() {
  return (
    <header className="header">
      <div className="header__brand-logo">
        <h1 className="header__title">Artist HarmonyHub</h1>
        <img className="header__image" src={Logo} alt="website logo"/>
      </div>
      <UserInfoIcon/>
      <NavBar/>
    </header>
  );
}

export default Header;
