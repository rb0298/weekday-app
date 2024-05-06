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
function Card() {
  return (
    <div className="container">
      <div className="job">
        <header>
          <img src={"https://logo.clearbit.com/rakuten.com"} alt=""></img>
          <div>
            <p style={{ letterSpacing: "2px", fontSize: "16px" }}>
              {data.companyName}
            </p>
            <p style={{ letterSpacing: "1px", fontSize: "20px" }}>
              {data.jobRole}
            </p>
            <p style={{ letterSpacing: "-1px", fontSize: "14px" }}>
              {data.location}
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
      <div className="job">
        <header>
          <img src={"https://logo.clearbit.com/rakuten.com"} alt=""></img>
          <div>
            <p style={{ letterSpacing: "2px", fontSize: "16px" }}>
              {data.companyName}
            </p>
            <p style={{ letterSpacing: "1px", fontSize: "20px" }}>
              {data.jobRole}
            </p>
            <p style={{ letterSpacing: "-1px", fontSize: "14px" }}>
              {data.location}
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
      <div className="job">
        <header>
          <img src={"https://logo.clearbit.com/rakuten.com"} alt=""></img>
          <div>
            <p style={{ letterSpacing: "2px", fontSize: "16px" }}>
              {data.companyName}
            </p>
            <p style={{ letterSpacing: "1px", fontSize: "20px" }}>
              {data.jobRole}
            </p>
            <p style={{ letterSpacing: "-1px", fontSize: "14px" }}>
              {data.location}
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
      <div className="job">
        <header>
          <img src={"https://logo.clearbit.com/rakuten.com"} alt=""></img>
          <div>
            <p style={{ letterSpacing: "2px", fontSize: "16px" }}>
              {data.companyName}
            </p>
            <p style={{ letterSpacing: "1px", fontSize: "20px" }}>
              {data.jobRole}
            </p>
            <p style={{ letterSpacing: "-1px", fontSize: "14px" }}>
              {data.location}
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
      <div className="job">
        <header>
          <img src={"https://logo.clearbit.com/rakuten.com"} alt=""></img>
          <div>
            <p style={{ letterSpacing: "2px", fontSize: "16px" }}>
              {data.companyName}
            </p>
            <p style={{ letterSpacing: "1px", fontSize: "20px" }}>
              {data.jobRole}
            </p>
            <p style={{ letterSpacing: "-1px", fontSize: "14px" }}>
              {data.location}
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
      <div className="job">
        <header>
          <img src={"https://logo.clearbit.com/rakuten.com"} alt=""></img>
          <div>
            <p style={{ letterSpacing: "1px", fontSize: "16px" }}>
              {data.companyName}
            </p>
            <p style={{ letterSpacing: "0.5px", fontSize: "20px" }}>
              {data.jobRole}
            </p>
            <p style={{ letterSpacing: "-0.5px", fontSize: "14px" }}>
              {data.location}
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
        <button>⚡️ Easy Apply</button>
      </div>
    </div>
  );
}

export default Card;
