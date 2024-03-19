import React, { useState } from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Register from './Register';
import Addmovie from './Addmovie';
import Login from './Login';
import Portal from './Portal';
import Home from './Home';
import NotFound from './NotFound';
import Movie from './Movies';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MovieDetail from './moviedetail';
import EditMovie from './EditMovie';

function App() {
  
const[mode,setMode]=useState("dark");

const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Paper style={{minHeight:"100vh",borderRadius:"0%"}} elevation={9}>
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/portal" element={<Portal mode={mode} setMode={setMode}/>}>
              <Route path='Home' element={<Home />} />
              <Route path="addmovie" element={<Addmovie/>}/>
              <Route path="movie" element={<Movie/>}/>
              <Route path="edit/:id" element={<EditMovie/>}/>
              <Route path="view/:id" element={<MovieDetail/>}/>
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        </Paper>
        </ThemeProvider>
    </div>
  );
}

export default App;
