import axios from "axios"


export const login = async(userData) => {
    try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/auth/login`,
          userData,
        );
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}