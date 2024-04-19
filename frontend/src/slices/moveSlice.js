import { createSlice } from "@reduxjs/toolkit";
//import { updateSave } from "../utils/saveUtils";

const initialState = localStorage.getItem("saveForLater")
  ? JSON.parse(localStorage.getItem("saveForLater"))
  : { saveForLaterItems: [] };

  const moveSlice = createSlice({
    name: "saveForLater",
    initialState,
    reducers: {
      moveToSave: (state, action) => {
        const item = action.payload;
  
        const existItem = state.saveForLaterItems.find((x) => x._id === item._id);
  
        if (existItem) {
          state.saveForLaterItems = state.saveForLaterItems.map((x) =>
            x._id === existItem._id ? item : x
          );
        } else {
          state.saveForLaterItems = [...state.saveForLaterItems, item];
        }
  
        localStorage.setItem("saveForLater", JSON.stringify(state)); // Update localStorage
      },
      removeFromSave: (state, action) => {
        state.saveForLaterItems = state.saveForLaterItems.filter((x) => x._id !== action.payload);
  
        localStorage.setItem("saveForLater", JSON.stringify(state)); // Update localStorage
      },
    }
  });
  

export const {
    moveToSave,
    removeFromSave,
  } = moveSlice.actions;
  
  export default moveSlice.reducer;
  