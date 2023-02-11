import { useState } from "react";
import Header from "./Header";
import Person from "./Person";
import useFetch from "./useFetch";

const FullList = () => {
  const [inputText, setInputText] = useState("");
  const [clickedSort, setClickedSort] = useState(false);
  const [buttonName, setButtonName] = useState("");
  const dataFromFetch = useFetch(`http://localhost:8000/data/`);
  const sortedDataDesc = useFetch(
    `http://localhost:8000/data/?_sort=${buttonName}&_order=asc`
  );

  const inputListener = (e) => {
    setInputText(e.target.value);
  };
  ///////// SEARCH BY USER NAME ////////////////
  const search = (text) => {
    return text.filter(
      (text) =>
        text.first_name.toLowerCase().indexOf(inputText.toLowerCase()) > -1
    );
  };

  ////////////// SORT ///////////////
  const sortHandler = (e) => {
    setButtonName(e.target.name);
    setClickedSort(!clickedSort);
  };

  return (
    <div>
      <Header></Header>
      <div className="searchNav">
        <input
          type="text"
          name="searchData"
          id="searchData"
          placeholder="Search by First Name :"
          value={inputText}
          onChange={inputListener}
        />
      </div>
      <div className="mainContainer">
        <div className="topNavigation">
          <button onClick={sortHandler} name="last_name">
            First Name ⇅
          </button>
          <button onClick={sortHandler} name="last_name">
            Last Name ⇅
          </button>
          <button onClick={sortHandler} name="email">
            Email ⇅
          </button>
          <button onClick={sortHandler} name="gender">
            Gender ⇅
          </button>
          <button onClick={sortHandler} name="ip_address">
            IP ⇅
          </button>
        </div>
        <div className="allInputs">
          {dataFromFetch && (
            <Person
              data={
                !clickedSort ? search(dataFromFetch) : search(sortedDataDesc)
              }
            ></Person>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullList;
