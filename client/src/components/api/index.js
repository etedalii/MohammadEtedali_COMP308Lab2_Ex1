import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3100/api',
})

export const insertCourse = payLoad => api.post('/course/add', payLoad);
export const getAllCourse = () => api.get(`/course`)
export const getCourseById = id => api.get(`/course/getone/${id}`)
export const updateCourseById = (id, payload) => api.put(`/course/edit/${id}`, payload)
export const deleteCourseById = id => api.delete(`/course/delete/${id}`)

const apis = {
    insertCourse,
    getAllCourse,
    updateCourseById,
    getCourseById,
    deleteCourseById,
}

export default apis