import { fromJS } from 'immutable';
import { Reducer } from '../../types/common';
import { LOADING_USERS, SET_USERS_LIST, OPEN_DIALOG } from './constants'

export const initialState = {
  loading: false,
  usersList: [],
  openDialog: false
}

const homeReducer: Reducer<any> = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_USERS: {
      return { ...state, loading: true }
    }
    case SET_USERS_LIST: {
      return { ...state, usersList: action.users }
    }
    case OPEN_DIALOG: {
      return { ...state, openDialog: action.open }
    }
    default:
      return state
  }
}

export default homeReducer