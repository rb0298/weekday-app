import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyName } from "./filterslice";

export default function CompanyInputField() {
  const dispatch = useDispatch();
  const { companyName } = useSelector((store) => store.filter);
  console.log(companyName);

  const handleInputChange = (event) => {
    dispatch(setCompanyName(event.target.value)); // Pass event.target.value
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        height: 50,
        margin: 1,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Company Name"
        inputProps={{ "aria-label": "Company Name" }}
        value={companyName}
        onChange={handleInputChange}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}
