import React from "react";

const TdItem = ({ data, config, column }) => {
  switch (config?.type) {
    case "image":
      return (
        <div className="elem__roles--table">
          <p>
            <img src={data[column]} alt="" />
          </p>
        </div>
      );
    case "checkbox":
      return (
        <div className="elem__roles--table">
          <p>
            {parseInt(data[column]) === 1 ? (
              <img
                src="/images/icons/check-caribbean-green.svg"
                alt="check-caribbean-green"
              />
            ) : (
              <img
                src="/images/icons/close-brick-red.svg"
                alt="close-brick-red"
              />
            )}
          </p>
        </div>
      );
    default:
      return (
        <div className="elem__roles--table">
          <p>{data[column]}</p>
        </div>
      );
  }
};
export default TdItem;
