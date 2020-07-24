import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { buildQueryString } from "../helpers";
import SideBarForm from './SideBarForm';

import "../styles/SideBar.css";

const cities = ["Manchester", "Leeds", "Sheffield", "Liverpool"];

const SideBar = () => {
  const { search } = useLocation();
  const { push } = useHistory();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString(
      "query",
      { title: { $regex: searchValue } },
      search
    );

    push(newQueryString);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
};

  return (
    <div className="SideBar">
     <SideBarForm 
            handleChange={handleChange}
            handleSearch={handleSearch}
            query={searchValue}/>
      <div>
        <h3>Filter By</h3>
        {cities.map((city) => (
          <Link key={city} to={buildQueryString("query", { city }, search)}>
            <li data-testid="city-option">{city}</li>
          </Link>
        ))}
      </div>
      <div>
        <h3>Sort By</h3>
        <Link to={buildQueryString("sort", { price: +1 }, search)}>
          <li>Ascending</li>
        </Link>
        <Link to={buildQueryString("sort", { price: -1 }, search)}>
          <li>Descending</li>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;