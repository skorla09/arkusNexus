import API from '../../Api/API'
import { User } from '../../types/common'

export const getList = async () => await API.get("users")

export const deleteUser = async (id: string) => await API.delete(`users/${id}`)

export const createUser = async (user: User) => await API.post(`users`, { user })