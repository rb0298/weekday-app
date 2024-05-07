const data = {
  companyName: "Rakuten",
  jdLink: "https://weekday.works",
  jdUid: "cfff363b-053c-11ef-83d3-06301d0a7178-92032",
  jobDetailsFromCompany:
    "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
  jobRole: "ios",
  location: "mumbai",
  logoUrl: "https://logo.clearbit.com/rakuten.com",
  maxExp: 15,
  maxJdSalary: 103,
  minExp: 10,
  minJdSalary: 86,
  salaryCurrencyCode: "USD",
};
export const applyFilters = (jobs, filters) => {
  let filteredJobs = jobs;
  if (filters.location) {
    filteredJobs = filteredJobs.filter(
      (job) => job.location === filters.location
    );
  }
  if (filters.industry) {
    filteredJobs = filteredJobs.filter(
      (job) => job.industry === filters.industry
    );
  }

  return filteredJobs;
};
