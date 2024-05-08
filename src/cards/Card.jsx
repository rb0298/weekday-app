import { textTransform } from "../resuablefunc";

function Card({ data }) {
  return (
    <div className="card">
      <header style={{ marginBottom: "20px" }}>
        <img
          style={{ width: "20%", height: "50%", alignSelf: "center" }}
          src={data.logoUrl}
          alt=""
        ></img>
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
      <h2 style={{ opacity: "0.7", marginBottom: "10px" }}>About Company:</h2>
      <h4 style={{ marginTop: "0px" }}> About us</h4>

      <p className="job-details">
        <span style={{ opacity: 1 }}>
          {data.jobDetailsFromCompany.split(" ").slice(0, 50).join(" ")}{" "}
        </span>
        <span style={{ opacity: 0.5 }}>
          {data.jobDetailsFromCompany.split(" ").slice(50, 60).join(" ")}
        </span>{" "}
        <span style={{ opacity: 0.1 }}>
          {data.jobDetailsFromCompany.split(" ").slice(60, 70).join(" ")}
        </span>
        <a style={{ letterSpacing: "1px" }}>{"View job"}</a>
      </p>
      <label style={{ letterSpacing: "2px", opacity: "0.8", fontSize: "20px" }}>
        {" "}
        Minimum Experience
      </label>
      <p style={{ fontSize: "18px", marginTop: "10px" }}>{data.minExp} years</p>
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
