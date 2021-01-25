import { LOADING_USERS, SET_USERS_LIST, OPEN_DIALOG } from './constants';
import { User } from '../../types/common'

export default interface Actions {
  loadingUsersAction: () => void
  setUsers: (user: User[]) => void
  openAddUserDialog: (open: boolean) => void
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


