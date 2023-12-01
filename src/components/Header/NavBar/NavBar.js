function NavBar() {
  return (
    <div className="navbar mt-5 bg-black col-span-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
            <li>
              <button>Home</button>
            </li>
            <li>
              <h2>Favorites</h2>
              <ul>
                <li>
                  <button>Favorite Artist</button>
                </li>
                <li>
                  <button>Favorite Albums</button>
                </li>
              </ul>
            </li>
            <li>
              <button>Search Artist</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-12 font-['Poppins']">
          <li>
            <button className="btn btn-ghost btn-wide text-2xl">Home</button>
          </li>
          <li>
            <details>
              <summary className="btn btn-ghost btn-wide text-2xl">Favorites</summary>
              <ul className="p-2 text-black">
                <li>
                  <button className="font-['Poppins'] text-lg font-semibold">Favorite Artists</button>
                </li>
                <li>
                  <button className="font-['Poppins'] text-lg font-semibold">Favorite Albums</button>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <button className="btn btn-ghost btn-wide text-2xl">Search Artist</button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        
      </div>
    </div>
  );
}

export default NavBar;

