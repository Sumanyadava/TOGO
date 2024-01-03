import React, { useState } from "react";
import Search_icon from "../../assets/Search_icon";
import Cross_icon from "../../assets/cross_icon";
import PrimaryButton from "../buttons/PrimaryButton";
import "./SearchBar.css";
import SecoundaryButton from "../buttons/SecoundaryButton";

const SearchBar = ({ placeholder, data }) => {
  

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState();


  //Aray can be null and can used previously if empty

  const HandlePlusClick = (e) => {
    console.log(e)
  };


  const handleFilter = (event) => {
    const SearchWord = event.target.value;
    setWordEntered(SearchWord);
    const newFilter = data.filter((value) => {
      return value.title
        .toLowerCase()
        .includes(SearchWord.toLowerCase().trim());
    });
    if (SearchWord == 0) {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };


  const handleWord = () => {
    setWordEntered("");
    setFilteredData([]);
  };


  return (
    <div>
      <div className="SearchBar">
        <input
          type="text"
          className="SearchBar_input"
          placeholder={placeholder}
          onChange={handleFilter}
          value={wordEntered}
        />
        <div className="SearchBar_icon" onClick={handleWord}>
          {filteredData.length == 0 ? (
            <Search_icon height="60%" width="60%" />
          ) : (
            <Cross_icon height="50%" width="50%" />
          )}
        </div>
      </div>

      {wordEntered !== undefined && wordEntered != 0 && (
        <div className="Data_output_addlist">
          {wordEntered}
          {/* componets cant have on click  */}
          <PrimaryButton button_content="+" onClick={HandlePlusClick} fontsize="2rem"/>
          

          
        </div>
      )}
      {filteredData.length != 0 && (
        <div className="Data_output">
          {filteredData.slice(0, 5).map((value) => {
            return <div className="Data_output_list">{value.title}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
