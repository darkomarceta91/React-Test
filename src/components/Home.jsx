import { useState } from "react";
import Person from "./Person";
import useFetch from "./useFetch";

const FullList = () => {
  const [inputText, setInputText] = useState("");
  const dataFromFetch = useFetch("http://localhost:8000/data/");

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
  return (
    <div>
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
        <div className="topNavigation"></div>
        <div className="allInputs">
          {dataFromFetch && <Person data={search(dataFromFetch)}></Person>}
        </div>
      </div>
    </div>
  );
};

export default FullList;
