import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import logout from './logout';
import { useNavigate } from 'react-router-dom';


export default function Topbar({mode,setMode}) {
  const navigate=useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
 
         <Button color='inherit' onClick={()=>navigate("/portal/home")}>Home</Button>
         <Button color='inherit' onClick={()=>navigate("/portal/movie")}>Movies</Button>
         <Button color='inherit' onClick={()=>navigate("/portal/addmovie")}>Add Movies</Button>

        <Button
          style={{marginLeft:"60%"}}
          startIcon={mode === "light" ?<Brightness4Icon/>:<Brightness7Icon/>}
          color="inherit"
          onClick={()=>setMode(mode === "light" ? "dark" : "light")}>
           {mode === "light" ? "dark" : "light"}mode
           </Button>
          <Button variant="outlined" color="inherit" onClick={()=>logout()}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>

  );
}