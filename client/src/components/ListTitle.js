import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagicWandSparkles,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, Card, Form, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteList, editListName } from "../redux/listData";
import "./ListTitle.css";

const ListTitle = (props) => {
  const dispatch = useDispatch();
  const [heading, setHeading] = useState(props.listName);
  const ref = useRef(null);

  function changeHeading(event) {
    const newValue = event.target.value;
    setHeading(newValue);
    const indexOfList = props.indexOfList;
    dispatch(editListName({ indexOfList, heading }));
  }

  function DeleteList() {
    console.log("4");
    // console.log(props.indexOfList);
    const indexOfList = props.indexOfList;
    // console.log(this.state);
    console.log(props.indexOfList);
    dispatch(deleteList(indexOfList));
    // console.log(indexOfList);
    // console.log(props.index);
    console.log("data sent");
  }
  return (
    <div className="listTitle">
      <FontAwesomeIcon
        className="headingIcon"
        icon={faMagicWandSparkles}
        size="xl"
      />
      <div className="listHeading">
        <input
          ref={ref}
          onChange={changeHeading}
          type="text"
          placeholder="List Heading"
          className="heading"
          value={heading}
          size="5.5"
        ></input>
      </div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <FontAwesomeIcon
            className="headingIcon"
            icon={faEllipsis}
            size="xl"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={DeleteList}>
            Delete
          </Dropdown.Item>
          {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default ListTitle;
