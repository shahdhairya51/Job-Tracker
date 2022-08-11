import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = [];
// const initialState = [
//   {
//     listName: "Wishlist",
//     cardsList: [
//       {
//         role: "SDE 1",
//         companyName: "Google",
//       },
//       {
//         role: "SDE 2",
//         companyName: "Google",
//       },
//       {
//         role: "SDE 3",
//         companyName: "Google",
//       },
//       {
//         role: "SDE 4",
//         companyName: "Google",
//       },
//     ],
//   },
//   {
//     listName: "Applied",
//     cardsList: [
//       {
//         role: "SDE 5",
//         companyName: "Amazon",
//       },
//       {
//         role: "SDE 6",
//         companyName: "Amazon",
//       },
//       {
//         role: "SDE 7",
//         companyName: "Amazon",
//       },
//       {
//         role: "SDE 8",
//         companyName: "Amazon",
//       },
//     ],
//   },
//   {
//     listName: "Interview",
//     cardsList: [
//       {
//         role: "SDE 9",
//         companyName: "Google",
//       },
//       {
//         role: "SDE 10",
//         companyName: "Google",
//       },
//       {
//         role: "SDE 11",
//         companyName: "Google",
//       },
//       {
//         role: "SDE 12",
//         companyName: "Google",
//       },
//       {
//         role: "SDE 13",
//         companyName: "Google",
//       },
//       {
//         role: "SDE 9",
//         companyName: "Google",
//       },
//       {
//         role: "SDE 10",
//         companyName: "Google",
//       },
//       {
//         role: "SDE 11",
//         companyName: "Google",
//       },
//       {
//         role: "SDE 12",
//         companyName: "Google",
//       },
//       {
//         role: "SDE 13",
//         companyName: "Google",
//       },
//     ],
//   },
// ];

export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    storeData: (state = initialState, action) => {
      // console.log(current(state));
      return action.payload;
    },
    addCard: (state = initialState, action) => {
      // console.log(current(state[action.payload.idx].cardsList));
      // console.log(action.payload);
      const { inputCompany, inputRole, idx } = action.payload;
      const newCard = {
        role: inputRole,
        companyName: inputCompany,
      };
      axios
        .post(`http://localhost:3001/` + state[idx]._id, newCard)
        .then((response) => {
          console.log(response.status);
        });
      state[idx].cardsList.push(newCard);
      //   return state.cardsList.push((state[action.payload.idx].cardsList));
    },
    removeCard: (state = initialState, action) => {
      // console.log(3);
      console.log(action.payload);
      const { idx, indexOfList } = action.payload;
      axios
        .delete(
          `http://localhost:3001/` +
            state[indexOfList]._id +
            "/" +
            state[indexOfList].cardsList[idx]._id
        )
        .then((response) => {
          console.log(response.status);
        });
      state[indexOfList].cardsList.splice(idx, 1);
    },
    addList: (state = initialState, action) => {
      axios.post(`http://localhost:3001/`).then((response) => {
        console.log(response.status);
      });
      state.push({
        listName: "Rejected",
        cardsList: [],
      });
    },
    deleteList: (state = initialState, action) => {
      const { indexOfList } = action.payload;
      console.log("1");
      // console.log(indexOfList);
      // console.log(this.state);
      console.log(action.payload.indexOfList_id);
      axios
        .put(`http://localhost:3001/` + state[action.payload]._id)
        .then((response) => {
          console.log(response.status);
        });
      console.log("2");
      state.splice(indexOfList, 1);
      console.log("3");
    },
    editListName: (state = initialState, action) => {
      const { indexOfList, heading } = action.payload;
      const newTitle = {
        listName: heading,
      };
      console.log(indexOfList);
      console.log(heading);
      axios.post(`http://localhost:3001/` + state[indexOfList]._id, newTitle);
      state[indexOfList].listName = heading;
      console.log(current(state[indexOfList]));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addCard,
  removeCard,
  addList,
  deleteList,
  editListName,
  storeData,
} = listsSlice.actions;

export default listsSlice.reducer;
