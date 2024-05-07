import { useState, useEffect, useRef } from "react";
import Card from "./Card";
import { applyFilters } from "../getfilterdata";

function Cards() {
  const [jobs, setJobs] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const elementRef = useRef(null);
  // const filterData = applyFilters(jobs, filterCondition);
  useEffect(() => {
    function onIntersection(entries) {
      const entry = entries[0];
      if (entry.isIntersecting && hasMore) fetchMoreJobs();
    }
    const observer = new IntersectionObserver(onIntersection);
    if (observer && elementRef.current) observer.observe(elementRef.current);
    return () => observer && observer.disconnect();
  }, [jobs]);

  const fetchMoreJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ limit: 6, offset: page * 6 }), // Adjust the limit as needed
        }
      );
      const data = await response.json();
      if (data.jdList.length == 0) return setHasMore(false);
      console.log(data.jdList);
      setJobs((prevJobs) => [...prevJobs, ...data.jdList]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="container">
        {jobs.map((data, index) => (
          <Card data={data} key={index} />
        ))}
      </div>
      {hasMore && (
        <div ref={elementRef} className="spinnerContainer">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}

export default Cards;
