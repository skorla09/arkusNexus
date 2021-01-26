import { Reducer, User } from '../../types/common';
import {
  LOADING_USERS,
  SET_USERS_LIST,
  OPEN_DIALOG,
  IS_EDITING_MODE,
  SET_USER_DATA,
  SHOW_MESSAGE,
  UPDATE_USER_INFO,
  CLOSE_DIALOG,
  OPEN_DELETE_MODAL
} from './constants'

export const initialState = {
  loading: false,
  usersList: [],
  openDialog: false,
  editMode: false,
  userId: '',
  userToEdit: {} as User,
  showSuccesMessage: false,
  message: '',
  openDeleteModal: false
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
      const isEditing = action.open ? state.isEditing : false
      const id = action.open ? state.userId : ''
      return { ...state, openDialog: action.open, editMode: isEditing, userId: id }
    }
    case IS_EDITING_MODE: {
      const editing = action.isEditing ? action.userId : ''
      const open = action.isEditing ? true : false
      const user = state.usersList.find((user: User) => user.id === action.userId)
      return {
        ...state,
        editMode: action.isEditing,
        userId: editing,
        openDialog: open,
        userToEdit: user
      }
    }
    case CLOSE_DIALOG: {
      return {
        ...state,
        openDialog: false,
        userToEdit: {} as User,
        userId: '',
        editMode: false,
        openDeleteModal: false,
        showSuccesMessage: false,
        message: '',
      }
    }
    case SET_USER_DATA:
      return { ...state, userToEdit: action.user }
    case SHOW_MESSAGE: {
      return {
        ...state,
        showSuccesMessage: action.show,
        message: action.message
      }
    }
    case UPDATE_USER_INFO: {
      return {
        ...state, userToEdit: {
          ...state.userToEdit, [action.id]: action.value
        }
      }
    }
    case OPEN_DELETE_MODAL: {
      return {
        ...state,
        openDeleteModal: action.open,
        userId: action.userId
      }
    }
    default:
      return state
  }
}

export default homeReducer