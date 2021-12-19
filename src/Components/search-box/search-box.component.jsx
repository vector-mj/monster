//@ts-nocheck

import React from "react";
import "./search-box.style.css"

export const SearchBox = ({placeholder,OnChangeEvent})=>{
    return <input
        className="search"
        onChange={OnChangeEvent}
        placeholder={placeholder}
        type="search"
    />
}

