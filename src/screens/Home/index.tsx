import React, { Component } from "react"
import { compose } from 'redux'
import { connect } from 'react-redux'
import './Styles.scss'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { RouteComponentProps } from "react-router-dom";
import { getUsersList, deleteUserAction, createUserAction } from './thunkActions'
import Actions, * as homeActions from './actions'
import { getHomeState } from './selector'
import './styles'

import Card from '../../components/card'
import AddUser from '../../components/AddUser'
import { User } from '../../types/common'
import { deleteUser } from "./api";


interface Props extends RouteComponentProps, Actions {
  getUsersList: () => void,
  deleteUserAction: (id?: string) => void
  createUserAction: (user: User) => void
  loading: boolean
  usersList: User[]
  openDialog: boolean
}

export class Home extends Component<Props> {
  componentDidMount() {
    const { getUsersList: getUsers } = this.props
    getUsers()
  }

  render() {
    const { usersList, deleteUserAction: deleteUser, createUserAction, openDialog } = this.props
    const cards = usersList.map((props, index) => (
      <Card key={index} {...props} onDelete={evt => deleteUser(props.id)} onClick={this.handleClick(props.id)} />
    ))

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
        <AddUser open={openDialog} closeDialog={this.handleCloseDialog} />
      </>
    )
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
    const { openAddUserDialog } = this.props
    openAddUserDialog(false)
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