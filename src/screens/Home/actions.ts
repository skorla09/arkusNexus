import { LOADING_USERS, SET_USERS_LIST, OPEN_DIALOG, IS_EDITING_MODE, SHOW_MESSAGE, UPDATE_USER_INFO, CLOSE_DIALOG, OPEN_DELETE_MODAL } from './constants';
import { User } from '../../types/common'

export default interface Actions {
  loadingUsersAction: () => void
  setUsers: (user: User[]) => void
  openAddUserDialog: (open: boolean) => void
  closeAddUserDialog: (open: boolean) => void
  setEditingModeAction: (isEditing: boolean, userId?: string) => void
  showMessageAction: (open: boolean, message: string) => void
  updateUserInfoAction: (id: string, value: string) => void
  openDeleteModalAction: (open: boolean, userId: string) => void
}

export const loadingUsersAction = () => ({
  type: LOADING_USERS
})

export const setUsersAction = (users: User[]) => ({
  type: SET_USERS_LIST,
  users
})

export const openAddUserDialog = (open: boolean) => ({
  type: OPEN_DIALOG,
  open
})
export const closeAddUserDialog = () => ({
  type: CLOSE_DIALOG,
})

export const setEditingModeAction = (isEditing: boolean, userId?: string) => ({
  type: IS_EDITING_MODE,
  isEditing,
  userId
})


export const showMessageAction = (show: boolean, message: string) => ({
  type: SHOW_MESSAGE,
  show,
  message
})


export const updateUserInfoAction = (id: string, value: string) => ({
  type: UPDATE_USER_INFO,
  id,
  value
})

export const openDeleteModalAction = (open: boolean, userId: string) => ({
  type: OPEN_DELETE_MODAL,
  open,
  userId
})