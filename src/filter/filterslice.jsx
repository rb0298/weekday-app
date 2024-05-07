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
    setRoles(state, action) {
      state.roles = action.payload;
    },
    setCompanyName(state, action) {
      state.companyName = action.payload;
    },
    setNumOfEmployees(state, action) {
      state.numOfEmployees = action.payload;
    },
    setMinSal(state, action) {
      state.minSal = action.payload;
    },
    setRemote(state, action) {
      state.remote = action.payload;
    },
    setExperience(state, action) {
      state.experience = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const {
  setRoles,
  setCompanyName,
  setNumOfEmployees,
  setMinSal,
  setRemote,
  setExperience,
} = filterSlice.actions;
