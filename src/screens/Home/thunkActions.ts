import { Dispatch } from 'redux';
import { SET_USERS_LIST } from './constants';
import { setUsersAction, loadingUsersAction } from './actions';
import { getList, deleteUser, createUser } from './api'
import { User } from '../../types/common';

export const getUsersList = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingUsersAction())
    try {
      const { data: { data: users } } = await getList()
      console.log(users)
      dispatch(setUsersAction(users))
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteUserAction = (id: string = '') => {
  return async (dispatch: Dispatch) => {
    try {
      console.log('delete user ')
      console.log(id)
      const response = await deleteUser(id)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}

export const createUserAction = (user: User) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await createUser(user)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}