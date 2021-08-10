import React from 'react'
import { Card,makeStyles, Tooltip, Typography } from '@material-ui/core';
const useStyle=makeStyles({
    img:{height:'300px',width:"100%",objectFit:'cover',}


})


const Char = ({item}) => {
    const classes =useStyle();
    console.log(item)
    return (
        <Card>
            <Tooltip title={<>
               
               <Typography>
                   Name:{item.name}
                      
               </Typography>
               <Typography>
                   Date of Birth:{item.birthday}
                      
               </Typography>

               <Typography>
                  Occupation :{item.occupation[0]}
                      
               </Typography>
               <Typography>
                  Status :{item.status}
                      
               </Typography>
               <Typography>
                Portrayed :{item.portrayed}
                      
               </Typography>
               <Typography>
               Appearance :{item.appearance[0]},{item.appearance[1]},{item.appearance[2]},{item.appearance[3]},{item.appearance[4]},
                      
               </Typography>

              </>  } 
            arrow placement="top">
            <img src={item.img} className={classes.img} alt="character"/>
            </Tooltip>
        </Card>
    )
}

export default Char
