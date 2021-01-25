import { Dispatch } from 'redux';
import { getUser } from './api'
import { setUserAction } from './actions'
import { User } from '../../types/common';

export const getUserAction = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data: { data: user } } = await getUser(id)
      console.log(user)
      dispatch(setUserAction(user))
    } catch (error) {
      console.log(error)
    }
  }
}