import React, { useState } from "react";
import SearchIcon from "../../assets/Search_icon";
import CrossIcon from "../../assets/cross_icon";
import ButtonComp from "../buttons/ButtonComp";
import "./SearchBar.css";

const SearchBar = ({ placeholder, data, headeruping }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const [ToGo, setToGo] = useState([]);

  
  //Aray can be null and can used previously if empty

  const HandlePlusClick = (e) => {
    headeruping([...ToGo, wordEntered])
    setToGo([...ToGo, wordEntered]);
    setWordEntered("");
    setFilteredData([]);
    
  };

  const handleFilter = (event) => {
    const SearchWord = event.target.value;
    setWordEntered(SearchWord);

    const newFilter = data?.todos.map((value) => {
      if (value?.name.toLowerCase().includes(SearchWord.toLowerCase().trim()))
        return value?.name;
    });
    if (SearchWord === 0) {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);

    }
  };

  const handleWord = () => {
    setFilteredData([]);

    setWordEntered("");
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
          {wordEntered.length === 0 ? (
            <SearchIcon height="60%" width="60%" />
          ) : (
            <CrossIcon height="50%" width="50%" />
          )}
        </div>
      </div>

      {wordEntered !== undefined && wordEntered != 0 && (
        <div className="Data_output_addlist">
          {wordEntered}

          <ButtonComp
            button_content="+"
            onClick={HandlePlusClick}
            type="circularButton circle_large"
          />
        </div>
      )}

      {/* a way to remove undefined data is filter boolea */}
      {filteredData.filter(Boolean).length !== 0 && (
        <div className="Data_output">
          {filteredData.slice(0, 5).map((outputlist) => {
            return <div className="Data_output_list">{outputlist}</div>;
          })}
        </div>
      )}

      {/* output this in main section  */}
      {/* {console.log(ToGo)} */}
      
    </div>
  );
};

export default SearchBar;
