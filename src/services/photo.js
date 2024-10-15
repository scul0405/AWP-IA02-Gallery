import axios from 'axios'

const API_URL = "https://api.unsplash.com"

const AUTH_HEADER = {
    headers: {
        Authorization: "Client-ID Aia2e4PHkSvA7gzHcn4vsJbUgsO8ngGuBwOL-dAEsek"
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
