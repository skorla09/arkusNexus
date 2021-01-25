import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface Props {
  open: boolean
  closeDialog: (evt: React.MouseEvent<HTMLButtonElement>) => void
}

const AddUser = ({ open, closeDialog }: Props) => {
  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <TextField
          label="First Name"
          id="first_name"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>Cancel</Button>
        <Button>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddUser