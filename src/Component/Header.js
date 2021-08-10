import React from 'react'
import { AppBar,Toolbar,makeStyles, Box, InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../image/logo.png'
const useStyle=makeStyles({
    header:{background:"#000",padding:"10px"},
    image:{
        width:"100px"
    },
    search:{position:'relative', backgroundColor:'rgba(255,255,255,0.15)',marginLeft:'120px',borderRadius:"5px",justifyContent:'right' },
    inputBox:{color:'inherit',margin:'0 50px'},
    searchIcon:{
        position:'absolute',marginLeft:10,top:3
        
    }
    
})

const Header = ({getText}) => {
    const classes =useStyle();
    return (
        <AppBar className={classes.header} position='static'>
            <Toolbar>
                <img src={logo} className={classes.image} alt="logo"/>
                <Box className={classes.search} >
                    <Box className={classes.searchIcon} >
                        <SearchIcon/> 
                    </Box>
                    <InputBase classes={{root:classes.inputBox}} 
                    placeholder='Search by name'autoFocus onChange={(e)=>{getText(e.target.value)}} />
                </Box>

            </Toolbar>
        </AppBar>
    )
}

export default Header;
