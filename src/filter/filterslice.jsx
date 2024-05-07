import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: "",
  numOfEmployees: "",
  minSal: "",
  remote: "",
  companyName: "",
  experience: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    roles(state, action) {
      state.roles = action.payLoad;
    },
    companyName(state, action) {
      state.companyName = action.payload;
    },
    numOfEmployees(state, action) {
      state.numOfEmployees = action.payload;
    },
    minSal(state, action) {
      state.minSal = action.payload;
    },
    remote(state, action) {
      state.remote = action.payload;
    },
    experience(state, action) {
      state.experience = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const {
  roles,
  companyName,
  numOfEmployees,
  minSal,
  remote,
  experience,
} = filterSlice.actions;
console.log(filterSlice);
