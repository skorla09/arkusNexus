import React, { useState, useEffect, MouseEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { User } from '../../types/common'

import { getUserAction } from './thunkActions'
import { getUser } from './api';
import './styles'

interface Props extends RouteComponentProps {
  getUserAction: (id: string) => void
}

const UserDetails = (props: Props) => {
  const [user, setUser] = useState({} as User)
  const [loading, setLoading] = useState(true)
  const { location: { pathname } } = props
  const userId = pathname.split('/').pop() || ''

  const getUserData = async () => {
    try {
      const { data: { data: userData } } = await getUser(userId)
      setUser(userData)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])
  const handleBack = (evt: React.MouseEvent<HTMLButtonElement>) => {
    history.back()
  }

  const name = `${user.first_name} ${user.last_name}`
  return (
    <>
      <div className="container">
        <h2>User Details</h2>
        {loading ? <CircularProgress /> : <img src={user.avatar} />}
        <div>{name}</div>
        <div>{user.email}</div>
        <Button variant="outlined" onClick={handleBack} className="back-button">Back</Button>
      </div>
    </>
  )
}

const UserDeatilsEnhanced = connect(
  null,
  { getUserAction }
)(UserDetails)

export default UserDeatilsEnhanced


