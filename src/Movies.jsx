import React, { useEffect, useState } from "react";
import Counter from "./counter";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { api } from "./global";


function Movies({pro,getmovies}){
    
    const navigate= useNavigate();
    let [show,setShow]=useState(false);

    const deleteMovie = (id) => {
        console.log(id);
        fetch(`${api}/delete/${id}`,{
            method:"DELETE",
        })
        .then(()=>alert("This card gets deleted now."))
        .then(()=> getmovies())
        

    };
return(
    <Card sx={{ maxWidth: 350 , minWidth:350}} className="pads" >
        <CardMedia>
        <img className="movie-poster" src={pro.poster} alt="" />
        </CardMedia>
        <CardContent className="movie-spec">
        <Typography className="movie-name">{pro.name}
            <IconButton color="primary" aria-label="Toggle-description"onClick={()=>setShow(!show)}>
                {show ? <ExpandLessIcon fontSize="large"/> : <ExpandMoreIcon fontSize="large" /> }
            </IconButton>
            <IconButton color="primary" aria-label="Toggle-Info" onClick={()=>navigate(`/portal/view/${pro._id}`)}>
                <InfoIcon fontSize="medium"/>
            </IconButton>
            </Typography>
            <Typography className="movie-rating">⭐{pro.rating}</Typography>
            </CardContent>
        {show ? <p className="movie-summary">{pro.summary}</p> : null}
        <CardActions>
        <Counter/>
        <IconButton
        sx={{marginLeft:"auto"}}
        aria-label="editMovie"
        onClick={()=>navigate(`/portal/edit/${pro._id}`)}>
            <EditIcon color="secondary"/>
        </IconButton>
        <IconButton
        sx={{marginLeft:"auto"}}
        aria-label="editMovie">
            <DeleteIcon color="secondary"
            onClick={()=>deleteMovie(pro._id)}/>
        </IconButton>
        </CardActions>
        </Card>
)
}

function Movie(){
    let [data,setdata] = useState([])
    const getmovies=()=>{
        fetch(`${api}/get`,{
            headers:{"backend-token":localStorage['backend-token']}
        }).then((das)=>das.json())
        .then((da)=>{setdata(da)
        console.log(da)})
       
    } 

    useEffect(()=>{
        getmovies();
    },[])

    return(
        <div className="movie-list">
        {data.map((element,index)=>(
            <Movies pro={element} key={index} getmovies={getmovies}/>
    ))}
    </div>
        
    )
}




export default Movie;