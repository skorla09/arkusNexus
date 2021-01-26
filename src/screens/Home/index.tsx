import React, { Component } from "react"
import { compose } from 'redux'
import { connect } from 'react-redux'
import './Styles.scss'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { RouteComponentProps } from "react-router-dom";
import { getUsersList, deleteUserAction, createUserAction } from './thunkActions'
import Actions, * as homeActions from './actions'
import { getHomeState } from './selector'
import './styles.scss'

import Card from '../../components/Card'
import AddUser from '../../components/AddUser'
import { User } from '../../types/common'
import { Button, DialogContentText } from "@material-ui/core";


interface Props extends RouteComponentProps, Actions {
  getUsersList: () => void,
  deleteUserAction: (id?: string) => void
  createUserAction: (user: User) => void
  loading: boolean
  usersList: User[]
  openDialog: boolean
  editMode: boolean
  userId: string
  userToEdit: User
  showSuccesMessage: boolean
  openDeleteModal: boolean
  message: string
}

export class Home extends Component<Props> {
  componentDidMount() {
    const { getUsersList: getUsers } = this.props
    getUsers()
  }

  render() {
    const {
      usersList,
      showSuccesMessage,
      openDialog,
      editMode,
      userToEdit,
      openDeleteModal,
      message
    } = this.props

    const cards = usersList.map((user, index) => (
      <Card key={index} {...user} onDelete={this.handleOpenDeleteModal(user.id)} onClick={this.handleClick(user.id)} onEdit={this.handleEdit(user.id)} />
    ))

    const Alert = (props: AlertProps) => (<MuiAlert elevation={6} variant="filled" {...props} />);

    return (
      <>
        <div className="title">ARKUS NEXUS APP</div>
        <div className="add-button-container">
          <Fab color="secondary" aria-label="add" onClick={this.handleOpenDialog}>
            <AddIcon />
          </Fab>
        </div>
        <div className="cards-container">
          {cards}
        </div>
        <AddUser open={openDialog} closeDialog={this.handleCloseDialog} isEditing={editMode} onConfirm={this.handleOnCreateUser} user={userToEdit} onChange={this.handleChange} />
        <Snackbar open={showSuccesMessage} autoHideDuration={6000}>
          <Alert severity="success">
            {message}
          </Alert>
        </Snackbar>
        <Dialog open={openDeleteModal}>
          <DialogTitle>Delete contact</DialogTitle>
          <DialogContent>
            <DialogContentText>Are you sure yo want to delete this contanct?</DialogContentText>
            <DialogActions>
              <Button onClick={this.handleOpenDeleteModal('')}>No</Button>
              <Button onClick={this.handleDeleteUser}>Yes</Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  handleOpenDeleteModal = (id: string = '') => (evt: React.MouseEvent<HTMLButtonElement>) => {
    const { openDeleteModalAction, openDeleteModal } = this.props
    openDeleteModalAction(!openDeleteModal, id)
  }

  handleDeleteUser = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const { deleteUserAction, userId } = this.props
    deleteUserAction(userId)
  }

  handleClick = (id?: string) => (evt: React.MouseEvent<HTMLImageElement>) => {
    const { history } = this.props
    history.push(`/details/${id}`)
  }

  handleOpenDialog = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const { openAddUserDialog } = this.props
    openAddUserDialog(true)
  }

  handleCloseDialog = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const { closeAddUserDialog } = this.props
    closeAddUserDialog(false)
  }

  handleEdit = (id?: string) => (evt: React.MouseEvent<HTMLButtonElement>) => {
    const { setEditingModeAction } = this.props
    setEditingModeAction(true, id)
  }

  handleOnCreateUser = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const { createUserAction, userToEdit } = this.props
    createUserAction(userToEdit)
  }

  handleChange = (id: string, value: string) => {
    const { updateUserInfoAction } = this.props
    updateUserInfoAction(id, value)
  }
}

const mapStateToProps = (state: any) => {
  const home = getHomeState(state)
  return {
    ...home
  }
}

const HomeEnhance = compose(
  connect(
    mapStateToProps,
    { ...homeActions, getUsersList, deleteUserAction, createUserAction }
  ))
  (Home)
export default HomeEnhance