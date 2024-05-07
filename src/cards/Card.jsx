import { textTransform } from "../resuablefunc";

textTransform;
function Card({ data }) {
  return (
    <div className="job">
      <header style={{ marginBottom: "20px" }}>
        <img src={data.logoUrl} alt=""></img>
        <div>
          <p style={{ letterSpacing: "2px", fontSize: "16px" }}>
            {textTransform(data.companyName)}
          </p>
          <p style={{ letterSpacing: "1px", fontSize: "20px" }}>
            {textTransform(data.jobRole)}
          </p>
          <p style={{ letterSpacing: "-1px", fontSize: "14px" }}>
            {textTransform(data.location)}
          </p>
        </div>
      </header>
      <label style={{ letterSpacing: "1px", fontSize: "18px" }}>
        {" "}
        Estimated Salary:{" "}
        <span style={{ fontSize: "16px" }}>
          ₹{data.minJdSalary}-{data.maxJdSalary} LPA✅
        </span>
      </label>
      <h3>About Company:</h3>
      <h4> About us</h4>

      <p className="job-details">
        <span style={{ opacity: 1 }}>
          {data.jobDetailsFromCompany.split(" ").slice(0, 50).join(" ")}{" "}
        </span>
        <span style={{ opacity: 0.4 }}>
          {data.jobDetailsFromCompany.split(" ").slice(50, 60).join(" ")}
        </span>{" "}
        <span style={{ opacity: 0.2 }}>
          {data.jobDetailsFromCompany.split(" ").slice(60, 70).join(" ")}
        </span>
        <a>{"Show more"}</a>
      </p>
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
