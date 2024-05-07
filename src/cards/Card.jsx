function Card({ data }) {
  return (
    <div className="job">
      <header>
        <img src={data.logoUrl} alt=""></img>
        <div>
          <p style={{ letterSpacing: "2px", fontSize: "16px" }}>
            {data.companyName}
          </p>
          <p style={{ letterSpacing: "1px", fontSize: "20px" }}>
            {data.jobRole.at(0).toUpperCase() + data.jobRole.slice(1)}
          </p>
          <p style={{ letterSpacing: "-1px", fontSize: "14px" }}>
            {data.location.at(0).toUpperCase() + data.location.slice(1)}
          </p>
        </div>
      </header>
      <label style={{ letterSpacing: "1px", fontSize: "20px" }}>
        {" "}
        Estimated Salary:{" "}
        <span style={{ fontSize: "18px" }}>
          ₹{data.minJdSalary}-{data.maxJdSalary} LPA✅
        </span>
      </label>
      <h3 className="job-title">About Company:</h3>
      <h4> About us</h4>
      <p className="details">{data.jobDetailsFromCompany}</p>
      <label> Minimum Experience</label>
      <p>{data.minExp} years</p>
      <button
        style={{
          borderRadius: "20px",
          textTransform: "uppercase",
          fontSize: "1.4rem",
        }}
      >
        ⚡️ Easy Apply
      </button>
    </div>
  );
}

export default Card;
