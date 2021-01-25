import React from 'react';
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import { User } from '../../types/common'
import { getDetailsState } from './selector'
import { compose } from 'redux';
import { getUserAction } from './thunkActions'

interface Props extends RouteComponentProps {
  getUserAction: (id: string) => void
  user: User
}
class UserDetails extends React.Component<Props, {}> {
  componentDidMount() {
    const { getUserAction, location: { pathname } } = this.props
    const userId = pathname.split('/').pop() || ''
    console.log(this.props)
    console.log(location.pathname)
    getUserAction(userId)
  }

  render() {
    console.log('======PROPS')
    console.log(this.props)
    const { user } = this.props

    const name = `${user.first_name} ${user.last_name}`
    return (
      <>
        <h2>User Details</h2>
        <img src={user.avatar} />
        <div>{user.first_name}</div>
      </>
    )

  }
}

const mapStateToProps = (state: any) => {
  const details = getDetailsState(state)
  return { ...details }
}

const UserDeatilsEnhanced = connect(
  mapStateToProps,
  { getUserAction }
)(UserDetails)

export default UserDeatilsEnhanced


