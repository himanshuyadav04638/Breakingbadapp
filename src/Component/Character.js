import { Box, Grid } from "@material-ui/core";
import Char from "./Char";

const Character=({data})=>{
    return(
        <Box style={{margin:20}}>
            <Grid container spacing={4} >
                 {data.map((item)=>{
                 return(
                  <Grid item xs={3}>
                    <Char key={item.char_id} item={item}/>
                   </Grid>
                    )

               

        })}
        </Grid>


        </Box>
      
        
        
     
    )

}
export default Character;