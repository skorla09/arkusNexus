import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress'
import Dropzone from 'react-dropzone'
import config from '../../config'
import { User } from '../../types/common'
import './styles'

interface Props {
  onConfirm: (evt: React.MouseEvent<HTMLButtonElement>) => void
  onChange: (key: string, value: string) => void
  closeDialog: (evt: React.MouseEvent<HTMLButtonElement>) => void
  open: boolean
  user: User
  isEditing?: boolean
  uploading?: boolean
}

const AddUser = ({ open, closeDialog, user, onChange, onConfirm, uploading }: Props) => {
  const { first_name = '', last_name = '', email = '', avatar = '' } = user
  const [loading, setLoading] = useState(false)

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = evt.target
    onChange(id, value)
  }

  const handleOnDropImage = async (files: File[]) => {
    if (!files.length) {
      return
    }
    setLoading(true)
    const file = files[0]
    const formData = new FormData()
    formData.append('file', file)
    const response = await fetch(`${config.baseUrl}/image-upload`, {
      method: 'POST',
      body: formData
    })
    const parsedResponse = await response.json()
    const imageUrl = parsedResponse[0].url

    onChange('avatar', imageUrl)
    setLoading(false)
  }

  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>Add Contact</DialogTitle>
      <DialogContent>
        <TextField
          value={first_name}
          label="First Name"
          id="first_name"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          value={last_name}
          label="Last Name"
          id="last_name"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          value={email}
          label="Email"
          id="email"
          fullWidth
          onChange={handleChange}
        />
        <Dropzone onDrop={acceptedFiles => handleOnDropImage(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()} className="upload">
                <input {...getInputProps()} />
                <p>click here to select files</p>
              </div>
              {loading ? <CircularProgress /> : <img placeholder="avatar" src={avatar} className="img-placeholder" />}
            </section>
          )}
        </Dropzone>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>Cancel</Button>
        {uploading ? <CircularProgress /> : <Button onClick={onConfirm}>Ok</Button>}
      </DialogActions>
    </Dialog>
  )
}

export default AddUser