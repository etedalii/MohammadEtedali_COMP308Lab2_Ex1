import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3100/api',
})

export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)


export const insertCourse = payLoad => api.post('/course/add', payLoad);
export const getAllCourse = () => api.get(`/course`)

const apis = {
    insertCourse,
    getAllCourse,
    
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis
