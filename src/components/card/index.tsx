import React from 'react';
import ClearIcon from '@material-ui/icons/ClearRounded';
import IconButton from '@material-ui/core/IconButton'
import EditRoundedIcon from '@material-ui/icons/EditRounded';

import { User } from '../../types/common'
import './styles'

interface CardProps extends User {
  onClick: (evt: React.MouseEvent<HTMLImageElement>) => void
  onDelete: (evt: React.MouseEvent<HTMLButtonElement>) => void
}

const Card = (props: CardProps) => {
  const { id, first_name, last_name, avatar, email, onDelete, onClick } = props
  return (
    <div className="card">
      <img src={avatar} {...{ onClick }} />
      <div className="card-info">
        <div>this is a card component</div>
        <div>{`${first_name} ${last_name}`}</div>
        <div>{email}</div>
        <div>
          <IconButton aria-label="delete" size="small" onClick={onDelete} >
            <EditRoundedIcon />
          </IconButton>
          <IconButton aria-label="delete" size="small" >
            <ClearIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Card