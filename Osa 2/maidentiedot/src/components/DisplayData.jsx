import { useState, useEffect } from "react";
import DetailDisplay from "./DetailDisplay";

const DisplayData = ({ searchedList, search }) => {
  const [detailsClick, setDetailsClick] = useState(-1);
  const handleDetailsClick = (index) => {
    setDetailsClick(index);
  };
  useEffect(() => {
      setDetailsClick(-1);
  }, [search])
  if (searchedList.length > 10) {
    return <div>Too many matches, try specifying your search!</div>;
  }
  return (
    <div>
      {searchedList.length === 1 ? (
        <DetailDisplay country={searchedList[0]} />
      ) : (
        searchedList.map((item, i) => (
          <div key={item.name.common}>
            {item.name.common}
            
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDetailsClick(i)}
            >
              {" "}
              Show details
            </button>
          </div>
        ))
      )}
      {detailsClick >= 0 && searchedList.length > 1 ? (
        <DetailDisplay country={searchedList[detailsClick]} />
      ) : null}
    </div>
  );
};

export default DisplayData;
