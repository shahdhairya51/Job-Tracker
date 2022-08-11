import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Header";
import ListContainer from "./components/ListContainer";
import SideBar from "./components/SideBar";
import "./components/SideBar.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addList, storeData } from "./redux/listData";
import axios from "axios";
function App() {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const getting = () => {
    console.log("HEY");
    axios.get(`http://localhost:3001/`).then((response) => {
      // console.log(response.data);
      dispatch(storeData(response.data));
    });
  };
  useEffect(getting, [dispatch]);
  function addNewList(props) {
    // console.log("onDeleteGotClicked");
    const indexOfList = props.indexOfList;
    // console.log(1);
    dispatch(addList({ indexOfList }));
    console.log(2);
    // console.log(idx);
  }
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Routes>
          <Route path="/" element={<ListContainer />} />
        </Routes>
        <Routes>
          <Route path="/home" element={[<Header />, <ListContainer />]} />
        </Routes>
      </Router> */}
      <div className="everything">
        <SideBar />
        <div className="boardworkspace">
          <Header />
          <div className="board">
            {lists.map((list, index) => (
              <ListContainer
                key={index}
                index={index}
                listName={list.listName}
                cardsList={list.cardsList}
              />
            ))}
            <div className="listContainer">
              <Button
                variant="secondary"
                className="addNewList"
                onClick={addNewList}
              >
                Create a list
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
