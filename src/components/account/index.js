import React from "react";
import { useParams } from "react-router";
import Table from "./blocks/Table";

const Index = () => {
  let { type } = useParams();
  return <Table type={type} />;
};

export default Index;
