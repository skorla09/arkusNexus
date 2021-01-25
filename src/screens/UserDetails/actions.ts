import { SET_USER } from './constants'
import { User } from '../../types/common'

export default interface Actions {
  setUserAction: (user: User) => void
}

export const setUserAction = (user: User) => ({
  type: SET_USER,
  user
})