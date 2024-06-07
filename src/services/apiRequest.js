import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";
import { useDispatch } from "react-redux";


export const login = async(userData) => {
    const dispatch = useDispatch()
    dispatch(fetchStart());
    try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/auth/login`,
          userData,
        );
        dispatch(loginSuccess(data))
        toastSuccessNotify("login is successfull")
        console.log(data)
        return data
    } catch (error) {
        dispatch(fetchFail())
        toastErrorNotify("opps! something went wrong...")
        console.log(error)
    }
}