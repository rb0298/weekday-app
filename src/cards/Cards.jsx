import { useRef } from "react";
import Card from "./Card";
import { useFilterData } from "./useFilterData";

function Cards() {
  const elementRef = useRef(null);

  /* To get the data based on applied filter*/
  const { hasMore, filterData } = useFilterData(elementRef);

  return (
    <>
      <div className="container">
        <div className="cards">
          {filterData.map((data, index) => (
            <Card data={data} key={index} /> /*to display individual job */
          ))}
        </div>
      </div>
      {/* if there is more data it will show the spinner*/}
      {hasMore && (
        <div ref={elementRef} className="spinnerContainer">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
}

export default Cards;
