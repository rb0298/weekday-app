import { useSelector } from "react-redux";
import {
  experience as exp,
  remote as rem,
  minSal as sal,
  roles as rol,
  numOfEmployees as numOfEmp,
} from "../data";
import CompanyInputField from "./CompanyInputField";
import JobFilter from "./JobFilter";
import {
  setRoles,
  setNumOfEmployees,
  setMinSal,
  setRemote,
  setExperience,
} from "./filterslice";
function AllFilters() {
  const data = useSelector((store) => store.filter);
  console.log(data);

  return (
    <div className="filter">
      <JobFilter
        label={"Roles"}
        options={rol}
        action={setRoles}
        value={data.roles}
      />
      <JobFilter
        label={"Number Of Employees"}
        options={numOfEmp}
        action={setNumOfEmployees}
        value={data.numOfEmployees}
      />
      <JobFilter
        label={"Experience:"}
        options={exp}
        action={setExperience}
        value={data.experience}
      />
      <JobFilter
        label={"Remote"}
        options={rem}
        action={setRemote}
        value={data.remote}
      />
      <JobFilter
        label={"Minimum Base Pay Salary"}
        options={sal}
        action={setMinSal}
        value={data.minSal}
      />
      <CompanyInputField />
    </div>
  );
}

export default AllFilters;
