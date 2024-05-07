import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";

function JobFilter({ label, options }) {
  const dispatch = useDispatch();
  const [age, setAge] = useState("");
  console.log(options);

  const handleChange = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }}>
      <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={age}
        onChange={handleChange}
        autoWidth
        label={label}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((opt, index) => (
          <MenuItem value={opt} key={index}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default JobFilter;
