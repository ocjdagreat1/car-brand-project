import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Volvotable.css'
import { Box, Button, CircularProgress } from '@mui/material';

function createData(Cars, Class, Year, Price) {
  return { Cars, Class, Year, Price };
}

const rows = [
  createData(' EX30', 'Electric SUV', '2025', '$36,245'),
  createData('EX40', 'Electric SUV', '2025', '$52,000'),
  createData(' EX90', 'Larage SUV', '2025', '$77,990'),
  createData(' XC40', 'Subcompat Luxry', '2025', '$40,650'),
  createData('XC60', 'Compact Luxry', '202', '$47,050'),
  createData('XC90', 'Midsize Luxry', '2025', '$57,400'),
  createData('S60', 'Compact Luxry Sudan', '2025', '$43,700'),
  createData('S90', 'Mid / Larage Luxry Sudan', '2025', '$120,000'),
];

export default function CarTable() {
  
  return (


    <TableContainer component={Paper} className='table'>
      <Box sx={{display: 'flex', alignItems: 'center', marginBottom:'5px'}}>
    <Button onClick={<CircularProgress/>} sx={{background: 'black', color:'white', padding:'16px 20px', marginLeft:'5px'}}>search</Button><input type="text" placeholder='Search car '/>
    </Box>
      <Table sx={{ minWidth: 650 }} aria-label="car table">
        <TableHead>
          <TableRow className='head'>
            <TableCell><strong>Cars</strong></TableCell>
            <TableCell><strong>Class</strong></TableCell>
            <TableCell><strong>Year</strong></TableCell>
            <TableCell><strong>Price</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.model}>
              <TableCell>{row.Cars}</TableCell>
              <TableCell>{row.Class}</TableCell>
              <TableCell>{row.Year}</TableCell>
              <TableCell>{row.Price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}