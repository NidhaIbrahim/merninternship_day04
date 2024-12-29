import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const View = () => {
  return (
      <div>
          <Typography variant="h3">Employee Details</Typography>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                          <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
                          <TableCell sx={{ fontWeight: 'bold' }}>Department</TableCell>
                          <TableCell sx={{ fontWeight: 'bold' }}>Salary</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                      </TableRow>
                    </TableBody>
              </Table>
        </TableContainer>   
    </div>
  )
}

export default View