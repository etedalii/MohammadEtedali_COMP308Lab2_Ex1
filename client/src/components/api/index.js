import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3100/api',
})

export const insertCourse = payLoad => api.post('/course/add', payLoad);
export const getAllCourse = () => api.get(`/course`)
export const getCourseById = id => api.get(`/course/getone/${id}`)
export const updateCourseById = (id, payload) => api.put(`/course/edit/${id}`, payload)
export const deleteCourseById = id => api.delete(`/course/delete/${id}`)

export const insertStudent = payLoad => api.post('/student/add', payLoad);
export const getAllStudent = () => api.get(`/student`)
export const getStudentById = id => api.get(`/student/getone/${id}`)
export const updateStudentById = (id, payload) => api.put(`/student/edit/${id}`, payload)
export const deleteStudentById = id => api.delete(`/student/delete/${id}`)

export const loginUser = payLoad => api.post('/login', payLoad);

const apis = {
    insertCourse,
    getAllCourse,
    updateCourseById,
    getCourseById,
    deleteCourseById,
    
    insertStudent,
    getAllStudent,
    getStudentById,
    updateStudentById,
    deleteStudentById,

    loginUser,
}

export default apis