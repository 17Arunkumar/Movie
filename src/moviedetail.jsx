import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
 
export default function MovieDetail(){
  const {id} =useParams();

  const navigate=useNavigate();
  
  const [movie,setMovie] = useState([]);
   
  useEffect(() => {
    fetch(`https://65f17108034bdbecc7629d11.mockapi.io/user/${id}`,{
        method:"GET"
    })
    .then((data)=> data.json())
    .then((mv) =>setMovie(mv));
  },[]);
   
  console.log(movie);

  const ratingStyles={
   color:movie.rating >=8 ? "green" : "red",
  }

  return(
    <div>
        <iframe width="656" height="369" src={movie.trailer} title={movie.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className="movie-detail-container">
            <div className="movie-spec">
                <h2 className="movie-name">{movie.name}</h2>
                <h3 style={ratingStyles} className="movie-rating">⭐{movie.rating}</h3>
            </div>
            <p className="movie-summary">{movie.summary}</p>
        </div>
        <Button variant="container" startIcon={<ArrowBackIosIcon/>} onClick={()=>navigate(-1)}>Back</Button>
    </div>
  )
}