import React from 'react';
import '../styles/SideBar.css';

const SideBarForm = ({handleChange, handleSearch, query}) => {
    return (
        <div className="">
        <form onSubmit={handleSearch} data-testid="sideBarForm">
            <label htmlFor="search-input">
            <input type="text"
            value={query}
            onChange={handleChange} 
            data-testid="input-id"
            className="input"/>
            <button type="submit">Search</button>
            </label>
        </form>
        </div>
    )
}

export default SideBarForm;