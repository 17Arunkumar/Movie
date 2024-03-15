import React,{useState} from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export default function Counter(){
    let [like,setLike] = useState(0);
    let [dislike,setDislike] = useState(0);

    const increementLike=()=>setLike(like+1);
    const increementDislike=()=>setDislike(dislike+1);


    return(
        <div>
           <IconButton color="primary" aria-label="like" onClick={increementLike}>
           <Badge badgeContent={like} color="primary">
            👍
           </Badge>
           </IconButton>
           <IconButton color="error" aria-label="dislike" onClick={increementDislike}>
           <Badge badgeContent={dislike} color="error">
            👎
           </Badge>
           </IconButton>

        </div>
    )
}
