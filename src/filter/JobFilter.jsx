import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";

function JobFilter({ label, options, value, action }) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(action(e.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 240 }}>
      <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={value}
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
