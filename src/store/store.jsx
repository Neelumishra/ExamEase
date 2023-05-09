import {configureStore, createSlice} from "@reduxjs/toolkit"
export const AdminDetails = createSlice({
  initialState: JSON.parse(localStorage.getItem("Questiondata"))||[],
  name: "AdminDetails",
  reducers: {
    append: (state, action) => {
      state.push(action.payload);
      console.log(state);
      localStorage.setItem("Questiondata", JSON.stringify(state));
    },
  },
});
export const store = configureStore({
  reducer: {
    AdminDetails: AdminDetails.reducer
  },
});