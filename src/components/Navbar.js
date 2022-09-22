import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../App.css'

const navItems = ['Home', 'Product', 'Learn', 'Dashboard'];

function Navbar() {
    return (
        <div>
            <AppBar sx={{backgroundColor:"#fff", color:"#000", display:'flex', justifyContent:'center'}} component="nav">
                <Toolbar>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{color:'#BE5113', marginLeft: 10,flexGrow: 0.8, display: { xs: 'none', sm: 'block' } }}
                    >
                        PLAYING WITH FIRE
                    </Typography>
                    <Box>
                        {navItems.map((item) => (
                            <>
                                <Button key={item} sx={{ marginRight:3, color: '#000' }}>
                                    {item}
                                </Button>
                            </>
                        ))}
                        <Button key="Register" variant="outlined" sx={{border:'3px solid #6200EE', color: '#000' ,marginRight:3 }}>
                            Register
                        </Button>
                        <Button key="Login" variant="contained" sx={{ border:'1.5px solid #6200EE', backgroundColor:'#6200EE',color: '#fff' }}>
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar