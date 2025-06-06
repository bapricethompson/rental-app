const SearchBar = () => {
  return (
    <div className="flex w-[90%] mx-auto  items-center border border-gray-300 rounded-lg p-1 bg-white h-12">
      <input
        type="text"
        placeholder="Item"
        className="flex-1 h-full border-r outline-none border-gray-300 hover:bg-gray-100 p-1.5 text-sm placeholder:text-black"
      />
      <input
        type="text"
        placeholder="Location"
        className="flex-1 h-full border-r outline-none border-gray-300 hover:bg-gray-100 p-1.5 text-sm placeholder:text-black"
      />
      <div className="relative h-full">
        <select
          className="h-full w-[140px] border-r border-gray-300 hover:bg-gray-100 p-1.5 pr-10 outline-none text-sm bg-white appearance-none cursor-pointer placeholder:text-black"
        >
          <option>Dates</option>
        </select>
        <span
          className="material-icons absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500"
          style={{ fontSize: "20px" }}
        >
          arrow_drop_down
        </span>
      </div>
      <button className=" flex items-center border-none bg-transparent text-xl cursor-pointer py-1.5 mx-4">
        <span
          className="material-icons"
          style={{
            fontSize: "30px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          search
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
