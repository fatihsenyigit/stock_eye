import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { fetchFail, fetchStart, loginSuccess, registerSuccess, logoutSuccess } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const useApiRequest = () => {
    
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token} = useSelector((state)=> state.auth)

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
  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios(
        `${process.env.REACT_APP_BASE_URL}/auth/logout/`, {
          headers: {Authorization: `Token ${token}`}
        }
      );
      dispatch(logoutSuccess());
      // navigate("/");
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  return { login, register, logout };
};

export default useApiRequest;
