import API from '../../Api/API'

export const getUser = (id: string) => API.get(`users/${id}`)