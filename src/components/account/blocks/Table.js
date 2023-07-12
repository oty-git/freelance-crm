import TableHeading from "./userTable/TableHeading";
import { capitalizeFirstLetter } from "../../../functions/functions";
import TableCatalog from "./userTable/TableCatalog";
import apiFreelancers from "../../../api/freelancers";
import { useEffect, useState } from "react";
import apiEmployees from "../../../api/employees";

const Table = ({ type }) => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    getUsersByType();
  }, [type]);

  let title = capitalizeFirstLetter(type);

  const getUsersByType = () => {
    let api = false;
    switch (type) {
      case "freelancers":
        api = apiFreelancers;
        break;
      case "employees":
        api = apiEmployees;
        break;
      default:
        return;
    }
    api
      .getAll()
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div className="employers-page__wrap">
      <div className="container">
        <TableHeading title={title} />
        <TableCatalog users={users} title={title} type={type} />
      </div>
    </div>
  );
};

export default Table;
