import React, { useEffect, useSelector } from "react";
import useStockRequest from "../services/useStockRequest";

const Firms = () => {
  const { getStock } = useStockRequest();

  useEffect(() => {
    getStock('firms')
    getStock('sales')
  }, []);

  return <div>Firms</div>;
};

export default Firms;
