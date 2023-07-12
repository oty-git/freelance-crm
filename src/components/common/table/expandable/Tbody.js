import React from "react";
import TableRow from "./TableRow";

const Tbody = ({ data, formConfig }) => {
  return (
    <React.Fragment>
      {data.map((item, index) => (
        <TableRow key={index} data={item} formConfig={formConfig} />
      ))}
    </React.Fragment>
  );
};

export default Tbody;
