import { Dispatch } from 'redux';
import { setUsersAction, loadingUsersAction, closeAddUserDialog, showMessageAction } from './actions';
import { getList, deleteUser, createUser, updateUser } from './api'
import { User } from '../../types/common';

export const getUsersList = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingUsersAction())
    try {
      const { data: { data: users } } = await getList()
      dispatch(setUsersAction(users))
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteUserAction = (id: string = '') => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await deleteUser(id)
      dispatch(closeAddUserDialog())
      dispatch(showMessageAction(true, 'User Deleted!'))
    } catch (error) {
      console.log(error)
    }
  }
}

export const createUserAction = (user: User, editMode: boolean = false, userId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      let message = ''
      if (editMode) {
        message = 'User Updated!'
        const rresponse = await (updateUser(userId, user))
      } else {
        const response = await createUser(user)
        message = 'User Created!'
      }
      dispatch(closeAddUserDialog())
      dispatch(showMessageAction(true, message))
    } catch (error) {
      console.log(error)
    }
  }
}
