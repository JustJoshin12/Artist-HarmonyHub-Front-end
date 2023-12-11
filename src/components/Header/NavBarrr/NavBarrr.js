import { useState } from "react";
import { Link } from "react-router-dom";

function NavBarNew({ onEdit }) {
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="bg-transparent mt-7 p-2 col-span-2 md:p-4">
      <div className="container mx-auto flex justify-between items-center lg:justify-around">
        <Link
          to="/Artist-HarmonyHub-Front-end"
          className="text-lg md:text-3xl text-white font-[Poppins] font-bold"
        >
          Home
        </Link>

        <div className="relative">
          <button
            onClick={toggleProfile}
            className="text-white focus:outline-none text-lg md:text-3xl font-[Poppins] font-bold"
          >
            Profile
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg flex flex-col items-start p-3 gap-y-4 duration-300" >
              <Link
                to="/Artist-HarmonyHub-Front-end/favorite"
                className="text-xl text-black font-semibold font-[Poppins]"
              >
                Profile Page
              </Link>
              <button onClick={onEdit} className=" text-black text-xl font-semibold font-[Poppins]">
                EditProfile
              </button>
              <button className=" text-black text-xl font-semibold font-[Poppins]">Log Out</button>
            </div>
          )}
        </div>

        <Link
          to="/Artist-HarmonyHub-Front-end/artist"
          className="text-lg md:text-3xl text-white font-[Poppins] font-bold"
        >
          Search Artist
        </Link>
      </div>
    </nav>
  );
}

export default NavBarNew;
