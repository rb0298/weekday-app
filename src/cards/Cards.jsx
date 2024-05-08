import { useRef } from "react";
import Card from "./Card";
import { useFilterData } from "./useFilterData";

function Cards() {
  const elementRef = useRef(null);
  const { hasMore, filterData } = useFilterData(elementRef);
  return (
    <>
      <div className="container">
        <div className="cards">
          {filterData.map((data, index) => (
            <Card data={data} key={index} />
          ))}
        </div>
      </div>
      {hasMore && (
        <div ref={elementRef} className="spinnerContainer">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
}

export default Cards;
