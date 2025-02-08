import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice";
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

  const getStock = async (path) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken(`/${path}`);
      const stockData = data.data
      dispatch(getStockSuccess({stockData, path}));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const deleteStock = async (path= 'firms', id) => {
    dispatch(fetchStart())
    try {
      await axiosToken.delete(`/${path}/${id}`)
      getStock(path)
      toastSuccessNotify(`${path} basariyla silinmistir`)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${path} problem olustu`)
    }
  }

  const postStock = async (path= "firms", info) => {
    dispatch(fetchStart())
    try {
      await axiosToken.post(`/${path}`, info)
      getStock(path)
      toastSuccessNotify(`${path} basariyla eklenmistir`)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${path} problem olustu`)
    }
  }

  const putStock = async (path= 'firms', info) => {
    dispatch(fetchStart())
    try {
      await axiosToken.put(`/${path}/${info._id}`, info)
      getStock(path)
    } catch (error) {
      dispatch(fetchFail())
    }
  }

  return { getStock, deleteStock, postStock, putStock };
};

export default useStockRequest;
