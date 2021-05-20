import React from "react";
import "./search.css";
import Togglebtn from "../togglebtn/Togglebtn";
const Searchbtn = ({value='',onChange,setView}) => {
  return (
    <div>
      <form className="flex-form">
        <label htmlFor="searchQuery" className="label">
          <i className="fa fa-search" aria-hidden="true" />
        </label>
        <input
          type="text"
          name="searchQuery"
          className="input"
          value={value}
          onChange={(e)=>onChange(e.currentTarget.value)}
          placeholder="Eg:Tandoori Chicken"
        />
        <div className="togglebtn">
          <Togglebtn lname="List View" rname="Grid View" onclick={()=>setView()} />
        </div>
      </form>
    </div>
  );
};

export default Searchbtn;
