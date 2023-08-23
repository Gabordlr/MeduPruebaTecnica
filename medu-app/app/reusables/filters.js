"use client"
import { useState } from "react";

export default function Index(props) {
  const [year, setYear] = useState("2010");
  const [category, setCategory] = useState("Both");
  const [searchQuery, setSearchQuery] = useState("");

  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    setYear(selectedYear);
    props.updatesValues(selectedYear, category)
    console.log("Selected Year:", selectedYear);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    props.updatesValues(year, selectedCategory)
    console.log("Selected Category:", selectedCategory);
  };

  const handleSearchQueryChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    props.updatesValues(selectedYear, category)
    console.log("Search Query:", query);
  };

  return (
    <div className="my-2 flex sm:flex-row flex-col">
      {/* Year Dropdown */}
      <div className="relative">
        <select
          className="h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={year}
          onChange={handleYearChange}
        >
          <option>2010</option>
          <option>2011</option>
          <option>2012</option>
          <option>2013</option>
          <option>2014</option>
          <option>2015</option>
        </select>
        {/* ... */}
      </div>

      {/* Category Dropdown */}
      <div className="relative">
        <select
          className="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
          value={category}
          onChange={handleCategoryChange}
        >
          <option>Both</option>
          <option>Series</option>
          <option>Movies</option>
        </select>
        {/* ... */}
      </div>

      {/* Search Input */}
      <div className="block relative">
        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
          {/* ... */}
        </span>
        <input
          placeholder="Search"
          className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </div>
    </div>
  );
}

