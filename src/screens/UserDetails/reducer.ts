import { fromJS } from 'immutable';
import { SET_USER } from './constants'
import { Reducer } from '../../types/common';

export const initialState = {
  loadigDetails: false,
  user: {}
}

const detailsReducer: Reducer<any> = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, user: action.user }
    }
    default:
      return state
  }
}

export default detailsReducer