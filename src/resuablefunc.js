const areValuesEqual = (val1, val2) => {
  const first = val1.split(" ").join("").toLowerCase();
  const second = val2.split(" ").join("").toLowerCase(); // Corrected val2
  return first === second;
};

const checkLocation = (val1, val2) => {
  return (
    val1.toLowerCase() === "hybrid" && val2.toLowerCase() === val1.toLowerCase()
  ); // Corrected condition
};

export const applyFilters = (jobs, filters) => {
  let filteredJobs = jobs;
  if (filters.roles) {
    filteredJobs = filteredJobs.filter((job) =>
      areValuesEqual(job.jobRole, filters.roles)
    );
  }
  if (filters.numOfEmployees) {
    return [];
  }
  if (filters.experience) {
    filteredJobs = filteredJobs.filter(
      (job) => Number(job.minExp) <= Number(filters.experience)
    );
  }
  if (filters.remote) {
    filteredJobs = filteredJobs.filter((job) =>
      checkLocation(filters.remote, job.location)
    );
  }
  if (filters.minSal) {
    filteredJobs = filteredJobs.filter((job) => {
      return Number.parseInt(filters.minSal) <= Number(job.minJdSalary);
    });
  }
  if (filters.companyName) {
    filteredJobs = filteredJobs.filter((job) => {
      return job.companyName
        .toLowerCase()
        .includes(filters.companyName.toLowerCase());
    });
  }
  return filteredJobs;
};

export const textTransform = function (value) {
  let data = value.split(" ");
  return data.map((val) => val.at(0).toUpperCase() + val.slice(1)).join(" ");
};
