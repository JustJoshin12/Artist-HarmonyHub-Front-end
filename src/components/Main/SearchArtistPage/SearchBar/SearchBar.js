import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center space-x-4 mb-4 justify-between ">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-[550px] text-white font-[Poppins] font-medium border-violet-900 border-2 bg-transparent text-lg md:text-xl"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        className=" btn bg-transparent text-white px-4 py-2 rounded-md border-none hover:bg-fuchsia-900 font-[Poppins] text-sm md:text-lg"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
