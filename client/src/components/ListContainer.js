import React, { useEffect, useState } from "react";
import { Button, Modal, Card, Form } from "react-bootstrap";
import ListTitle from "./ListTitle";
import { faplus } from "@fortawesome/react-fontawesome";
import CompanyCard from "./CompanyCard";
import "./ListContainer.css";
import { addCard } from "../redux/listData";
import { useDispatch } from "react-redux";

function MyVerticallyCenteredModal(props) {
  const [inputCompany, setInputCompany] = useState("");
  const [inputRole, setInputRole] = useState("");
  const dispatch = useDispatch();
  function onSave() {
    // console.log("onSaveGotClicked");
    const idx = props.index;
    dispatch(addCard({ inputCompany, inputRole, idx }));

    // console.log(props.index);

    props.onHide();
  }
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="companyName"
            onChange={(event) => setInputCompany(event.target.value)}
            value={inputCompany}
            autoFocus
          />
          {/* {console.log(inputCompany)} */}
          <Form.Label>role</Form.Label>
          <Form.Control
            type="email"
            placeholder="role"
            onChange={(event) => setInputRole(event.target.value)}
            value={inputRole}
          />
          {/* {console.log(inputRole)} */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Discard </Button>
        <Button onClick={onSave}>Save </Button>
      </Modal.Footer>
    </Modal>
  );
}
const ListContainer = (props) => {
  // let [cardsList, setcardsList] = useState([cardsList]);
  // const addItem = (role, companyName) => {
  //   let newCardsList = [...cardsList];
  //   newCardsList.push({
  //     role: role,
  //     companyName: companyName,
  //   });
  //   setcardsList(newCardsList);
  // };
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="listContainer">
      <ListTitle indexOfList={props.index} listName={props.listName} />

      <Button
        className="addbutton"
        as="input"
        type="button"
        value="+"
        onClick={() => setModalShow(true)}
      />

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        index={props.index}
      />

      <div>
        {props.cardsList.map((card, index) => (
          <CompanyCard
            role={card.role}
            companyName={card.companyName}
            indexOfCard={index}
            indexOfList={props.index}
          />
        ))}
      </div>
    </div>
  );
};

export default ListContainer;
