import React from "react";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();

  const getFirms = async () => {
    dispatch();
    try {
      const { data } = axiosToken("/firms");
      dispatch();
    } catch (error) {
      dispatch();
    }
  };

  return { getFirms };
};

export default useStockRequest;
