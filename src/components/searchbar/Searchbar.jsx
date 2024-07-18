import React, { useState, useRef } from "react";
import "./Searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
    const [location, setLocation] = useState(null);
    const inputRef = useRef(null);

    const handleSearch = () => {
        console.log(inputRef.current.value);
    };

    return (
        <div className="searchbar">
            {/* <FontAwesomeIcon icon={faArrowUp} color="var(--background)"/>
             */}
            <FontAwesomeIcon icon={faSearch} className="searchicon" />
            <input ref={inputRef} className="textfield" placeholder="Search Locations..." />
            <button onClick={handleSearch} className="button">
                <FontAwesomeIcon icon={faLocationDot} fontSize={'1.5rem'}/>
            </button>
        </div>
    );
};

export default SearchBar;
