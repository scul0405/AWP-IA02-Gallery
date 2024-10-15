import axios from 'axios'

const API_URL = "https://api.unsplash.com"

const AUTH_HEADER = {
    headers: {
        Authorization: "Client-ID 5u1coF4UUWM2MgI5ou_FNlNBBD2MKFqAr3b4c3f1v48"
    }
}

export const getPhotos = async (page, size) => {
    const res = await axios.get(`${API_URL}/photos?page=${page}&per_page=${size}`, AUTH_HEADER)

    return res
}

export const getPhoto = async (id) => {
    const res = await axios.get(`${API_URL}/photos/${id}`, AUTH_HEADER)

    return res
}