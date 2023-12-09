import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NavBar({onEdit}) {
  return (
    <div className="navbar mt-5 bg-black col-span-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost min-[1025px]:hidden">
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
          <ul className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52 text-black">
            <li>
              <button>
                <Link to="/"><button>Home</button></Link>
              </button>
            </li>
            <li>
              <h2>Profile</h2>
              <ul>
                <li>
                  <button>Favorites</button>
                </li>
                <li>
                  <button onClick={onEdit}>Edit Profile</button>
                </li>
                <li>
                  <button>Log Out</button>
                </li>
              </ul>
            </li>
            <li>
              <button>
                <Link to="/artist">Search Artist</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden min-[1025px]:flex">
        <ul className="menu menu-horizontal px-1 gap-12 font-['Poppins']">
          <li>
            <Link to="/">
              <button className="btn btn-ghost btn-wide text-2xl">Home</button>
            </Link>
          </li>
          <li>
            <details>
              <summary className="btn btn-ghost btn-wide text-2xl">
                Profile
              </summary>
              <ul className="p-2 text-black left-[50px]">
                <li>
                  <Link to="/favorites" >
                  <button className="font-['Poppins'] text-xl font-bold tracking-wide text-center">
                    Favorites
                  </button>
                  </Link>
                </li>
                <li>
                  <button className="font-['Poppins'] text-xl font-bold tracking-wide text-center" onClick={onEdit}>
                    Edit Profile
                  </button>
                </li>
                <li>
                  <button className="font-['Poppins'] text-xl font-bold tracking-wide text-center">
                    Log Out
                  </button>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/artist">
              <button className="btn btn-ghost btn-wide text-2xl">
                Search Artist
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}

export default NavBar;
