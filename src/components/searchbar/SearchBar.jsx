import React, { useState } from "react";
import Search_icon from "../../assets/Search_icon";
import Cross_icon from "../../assets/cross_icon";
import ButtonComp from "../buttons/ButtonComp";
import "./SearchBar.css";


const SearchBar = ({ placeholder, data }) => {
  

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState();

  const [ToGo , newToGo] = useState([])


  //Aray can be null and can used previously if empty

  const HandlePlusClick = (e) => {
    newToGo([...ToGo, wordEntered])
    setWordEntered("")
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
          <ButtonComp button_content="+" onClick={HandlePlusClick} type="circularButton circle_large" />
          

          
        </div>
      )}
      {filteredData.length != 0 && (
        <div className="Data_output">
          {filteredData.slice(0, 5).map((value) => {
            return <div className="Data_output_list">{value.title}</div>;
          })}
        </div>
      )}

      {/* output this in main section  */}
      <div className="cc">
        

        {ToGo.map((ob) => (
          <div className="ppp">
            
            {ob}
            </div>
          
        ))}


      </div>
    </div>
  );
};

export default SearchBar;
