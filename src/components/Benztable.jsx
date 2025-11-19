import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Benztable.css'
import { Box, Button, CircularProgress } from '@mui/material';
import Appbar from "../components/Appbar"

function createData(Cars, Class, Year, Price) {
  return { Cars, Class, Year, Price };
}

const rows = [
  createData(' C-Class', 'Sedan', '2025', '$45,000'),
  createData(' E-Class', 'sedan', '2025', '$55,000'),
  createData(' S-Class', 'Sedan', '2025', '$120,000'),
  createData(' GLC', 'SVU', '2023', '$50,000'),
  createData('GLE', 'SUV', '2024', '$70,000'),
  createData('AMG GT', 'Sports car', '2025', '$150,000'),
  createData('G-Wagon', 'SUV', '2025', '$140,000'),
  createData('GLS', 'SUV', '2025', '$120,000'),
];

export default function CarTable() {
  
  return (
    <>

    <Appbar/>

    <TableContainer component={Paper} className='table'>
      <Box sx={{display: 'flex', alignItems: 'center', marginBottom:'5px',marginTop:'100px'}}>
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
    </>
  );
}