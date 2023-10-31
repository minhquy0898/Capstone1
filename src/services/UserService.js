import axios from 'axios'

export const axiosJwt = axios.create()

export const loginUser = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/user/sign-in`, data)
    return res.data
}

export const signupUser = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/user/sign-up`, data)
    return res.data
}

export const getDetailUser = async (id, access_token) => {
    const res = await axiosJwt.get(`http://localhost:3000/api/user/get-detail/${id}`, {
        headers: {
            token: `Beare ${access_token}`,
        }
    },)
    return res.data
}

export const refreshToken = async () => {
    const res = await axios.post(`http://localhost:3000/api/user/refresh-token`, {
        withCredentials: true
    })
    return res.data
}

export const logoutUser = async () => {
    const res = await axios.post(`http://localhost:3000/api/user/log-out`)
    return res.data
}

export const updateUser = async (id, data, access_token) => {
    const res = await axiosJwt.put(`http://localhost:3000/api/user/update-user/${id}`, data, {
        headers: {
            token: `Beare ${access_token}`,
        }
    })
    return res.data
}

