import { useState, useEffect } from "react";
import Header from "./Header";
import Person from "./Person";
import useFetch from "./useFetch";

const FullList = () => {
  const [fetchData, setFetchData] = useState(null);
  const [inputText, setInputText] = useState("");
  const [buttonName, setButtonName] = useState("");
  const sortedDataDesc = useFetch(
    `http://localhost:8000/data/?_sort=${buttonName}&_order=asc`
  );
  const searchForData = useFetch(`http://localhost:8000/data/?q=${inputText}`);

  ///////////////// INITIAL FETCH /////////////////////////
  const loadData = () => {
    fetch(`http://localhost:8000/data/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchData(data);
      });
  };
  useEffect(() => {
    loadData();
  }, []);

  ///////// SEARCH BAR ////////////////
  const inputListener = (e) => {
    setInputText(e.target.value);
  };
  const onClickHandler = () => {
    setFetchData(searchForData);
  };
  const resetClickHandler = () => {
    loadData();
  };

  ////////////// SORT ///////////////
  const sortHandler = (e) => {
    setButtonName(e.target.name);
    setFetchData(sortedDataDesc);
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
        <button className="searchButton" onClick={onClickHandler}>
          Search
        </button>
        <button className="resetButton" onClick={resetClickHandler}>
          Resset
        </button>
      </div>
      <div className="mainContainer">
        <div className="topNavigation">
          <button onClick={sortHandler} name="first_name">
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
          {fetchData && <Person data={fetchData}></Person>}
        </div>
      </div>
    </div>
  );
};

export default FullList;
