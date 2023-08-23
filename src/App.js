import './App.css';
import { useState } from 'react';
import { Table } from '@mui/material';

import React from "react";
import { Stack,Button } from '@mui/material';

import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import {  TextField, IconButton } from '@material-ui/core';

import { SearchOutlined } from '@material-ui/icons';


import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles({
 table: {
   width: 400,
   margin: "auto"
 }
});
function createData(Name,AccountNo,MobileNo,EmailID,MinimumBalance) {
  return { Name,AccountNo,MobileNo,EmailID,MinimumBalance};
 }
   
 const rows = [
  createData("Gauri ",1234567,7654321,"abc@gmail.com",500),
  createData("Dhruv",1234568,8654321,"adc@gmail.com",500),
  createData("Avijeet",1234569,9654321,"aec@gmail.com",500),
  createData("Priyanka",1234560,9654321,"afc@gmail.com",500),
  createData("Omkar",1234561,1654321,"agc@gmail.com",500),
 ];
   
 function App() {
  
  <TextField
                fullWidth
                id="standard-bare"
                variant="outlined"
                defaultValue="Search"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
              />


  const classes = useStyles();
  return (
    
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">AccountNo</TableCell>
            <TableCell align="right">MobileNo</TableCell>
            <TableCell align="right">EmailID</TableCell>
            <TableCell align="right">MinimumBalance</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Name}>
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.AccountNo}</TableCell>
              <TableCell align="right">{row.MobileNo}</TableCell>
              <TableCell align="right">{row.EmailID}</TableCell>
              <TableCell align="right">{row.MinimumBalance}</TableCell>
              <TableCell align="right"><div>
        <Button variant="Approve">Approve </Button>
        <Button variant="Deny" style={{backgroundColor:'red'}}>Deny </Button>

       </div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
  );
 }

export default App;
