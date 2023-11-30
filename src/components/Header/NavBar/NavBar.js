import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <button className="navbar__button navbar__button-active">Home</button>
      <button className="navbar__button">Search</button>
      <button className="navbar__button">Favorite Artist</button>
      <button className="navbar__button">Favorite Albums</button>
    </div>
  );
}

export default NavBar;
