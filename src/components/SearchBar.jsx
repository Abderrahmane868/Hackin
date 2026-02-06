function SearchBar() {
  return (
    <div className=" flex items-center justify-center">
      <div className="flex items-center  rounded-xl px-6 py-4 w-[700px] shadow">
        <div className="flex items-center gap-2 text-red-500 font-medium">
          <span className="text-xl">🔍</span>
          <span>Search</span>
        </div>

        <div className="h-6 w-px  mx-6"></div>

        <input
          type="text"
          placeholder="Search....."
          className="flex-1 bg-transparent outline-none text-gray-500"
        />

        <div className="h-6 w-px bg-gray-300 mx-6"></div>

        <select className="bg-transparent outline-none text-gray-600 font-medium">
          <option>Course/Service</option>
          <option>Course</option>
          <option>Service</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
