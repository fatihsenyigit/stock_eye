import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getStockSuccess, getFourRequestSuccess } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();

  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } =await axiosToken("/firms");
  //     dispatch(getFirmsSuccess(data.data));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //   }
  // };

  // const getSales = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } =await axiosToken("/sales");
  //     dispatch(getSalesSuccess(data.data));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //   }
  // };

  const getFourRequest = async () => {
    dispatch(fetchStart());
    try {
      const [productS, purchaseS, brandS, firmS] = await Promise.all([
         axiosToken("/products"),
         axiosToken("/purchases"),
         axiosToken("/brands"),
         axiosToken("/firms"),
      ]);
      const products = productS?.data.data
      const purchases = purchaseS?.data.data
      const brands = brandS?.data.data
      const firms = firmS?.data.data
      dispatch(getFourRequestSuccess({products, purchases, brands, firms}))
    } catch (error) {}
  };

  const getStock = async (path) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken(`/${path}`);
      const stockData = data.data;
      dispatch(getStockSuccess({ stockData, path }));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${path} problem olustu`);
    }
  };

  const deleteStock = async (path = "firms", id) => {
    dispatch(fetchStart());
    try {
      await axiosToken.delete(`/${path}/${id}`);
      getStock(path);
      toastSuccessNotify(`${path} basariyla silinmistir`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${path} problem olustu`);
    }
  };

  const postStock = async (path = "firms", info) => {
    dispatch(fetchStart());
    try {
      await axiosToken.post(`/${path}`, info);
      getStock(path);
      toastSuccessNotify(`${path} basariyla eklenmistir`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${path} problem olustu`);
    }
  };

  const putStock = async (path = "firms", info) => {
    dispatch(fetchStart());
    try {
      await axiosToken.put(`/${path}/${info._id}`, info);
      getStock(path);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${path} problem olustu`);
    }
  };

  return { getStock, deleteStock, postStock, putStock, getFourRequest };
};

export default useStockRequest;
