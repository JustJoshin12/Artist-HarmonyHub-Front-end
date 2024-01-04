import { Link } from "react-router-dom";

function NavBar({ onEdit, onLogOut, loggedIn }) {
  return (
    <div className="navbar mt-5 col-span-2 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost min-[1025px]:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <div role="button" tabIndex={0}>
                <Link to="/">Home</Link>
              </div>
            </li>
            {loggedIn ? (
              <ul>
                <li>
                  <Link to="/favorites">Favorites</Link>
                </li>
                <li>
                  <div role="button" tabIndex={0} onClick={onEdit}>
                    Edit Profile
                  </div>
                </li>
                <li>
                  <div role="button" tabIndex={0} onClick={onLogOut}>
                    Log Out
                  </div>
                </li>
              </ul>
            ) : (
              <></>
            )}
            <li>
              <div role="button" tabIndex={0}>
                <Link to="/artist">Search Artist</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden min-[1025px]:flex">
        <ul className="menu menu-horizontal px-1 gap-12 font-['Poppins']">
          <li>
            <Link to="/" className="text-2xl font-bold">
              Home
            </Link>
          </li>
          <li>
            {loggedIn ? (
              <details>
                <summary className="btn btn-ghost btn-wide text-2xl">
                  Profile
                </summary>
                <ul className="p-2 text-black left-[50px] z-10">
                  <li>
                    <Link
                      to="/favorites"
                      className="font-['Poppins'] text-xl font-bold tracking-wide text-center"
                    >
                      Favorites
                    </Link>
                  </li>
                  <li>
                    <button
                      className="font-['Poppins'] text-xl font-bold tracking-wide text-center"
                      onClick={onEdit}
                    >
                      Edit Profile
                    </button>
                  </li>
                  <li>
                    <button
                      className="font-['Poppins'] text-xl font-bold tracking-wide text-center"
                      onClick={onLogOut}
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </details>
            ) : (
              <></>
            )}
          </li>
          <li>
            <Link to="/artist" className="text-2xl font-bold">
              Search Artist
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}

export default NavBar;
