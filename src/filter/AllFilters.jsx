import { experience, remote, minSal, roles, numOfEmployees } from "../data";
import CompanyInputField from "./CompanyInputField";
import JobFilter from "./JobFilter";
function AllFilters() {
  return (
    <div className="filter">
      <JobFilter label={"Roles"} options={roles} />
      <JobFilter label={"Number Of Employees"} options={numOfEmployees} />
      <JobFilter label={"Experience:"} options={experience} />
      <JobFilter label={"Remote"} options={remote} />
      <JobFilter label={"Minimum Base Pay Salary"} options={minSal} />
      <CompanyInputField />
    </div>
  );
}

export default AllFilters;
