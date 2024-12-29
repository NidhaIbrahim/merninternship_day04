import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
      <div>
            <Typography variant="h3" >Add Details of Employee</Typography><br /><br />
            <TextField id="filled-basic" label="Enter the name" variant="filled" /><br /><br />
            <TextField id="filled-basic" label="Enter the age" variant="filled"  /><br /><br />
            <TextField id="filled-basic" label="Enter the department" variant="filled"  /><br /><br />
          <TextField id="filled-basic" label="Enter the salary" variant="filled" /><br /><br />
            <Button variant="contained" color='error'>&nbsp;Add&nbsp;</Button>
    </div>
  )
}

export default Add