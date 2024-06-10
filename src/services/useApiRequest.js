import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { fetchFail, fetchStart, loginSuccess, registerSuccess } from "../features/authSlice";
import { useDispatch } from "react-redux";

import React from "react";
import { useNavigate } from "react-router-dom";

const useApiRequest = () => {
    
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (userData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userData,
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("login is successfull");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("opps! something went wrong...");
      console.log(error);
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/`, userInfo
      );
      dispatch(registerSuccess(data))
      navigate('/stock')
    } catch (error) {
      dispatch(fetchFail())
    }
  };
  const logout = async () => {};
  return { login, register, logout };
};

export default useApiRequest;
