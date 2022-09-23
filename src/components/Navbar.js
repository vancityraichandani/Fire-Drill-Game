import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../App.css'

function Navbar(props) {

    const [loginPopup, setLoginPopup] = useState(false);

    const handleNavLogin = () => {
        setLoginPopup(true)
    }

    const handleLogin = () => {
        setLoginPopup(false)
        props.setLogin(true)
    }

    const handleLogout = () => {
        props.setLogin(false)
        props.setFile(null)
        props.setSubmit(false)
    }

    return (
        <div>
            <div>
                {
                    loginPopup
                    &&
                    <div class="content">
                        <div class="flex-div">
                            <form className='form1'>
                                <Typography
                                    variant="h4"
                                    component="div"
                                    className='logo'
                                    sx={{cursor:'pointer', color: '#BE5113', textAlign: 'center', marginBottom: 5 }}
                                >
                                    PLAYING &nbsp; WITH &nbsp; FIRE
                                </Typography>
                                <input type="text" placeholder="Enter Email" required />
                                <input type="password" placeholder="Password" required />
                                <br />
                                <button onClick={handleLogin} class="login">Log In</button>
                                <a href="#">Forgot Password ?</a>
                                <hr />
                                <button class="create-account">Create Account</button>
                            </form>
                        </div>
                    </div>
                }
            </div>
            <AppBar sx={{ backgroundColor: "#fff", color: "#000", display: 'flex', justifyContent: 'center' }} component="nav">
                <Toolbar>
                    <Typography
                        variant="h5"
                        component="div"
                        className='logo'
                        sx={{cursor:'pointer', color: '#BE5113', marginLeft: 10, flexGrow: 0.9, display: { xs: 'none', sm: 'block' } }}
                    >
                        PLAYING &nbsp; WITH &nbsp; FIRE
                    </Typography>
                    <Box>

                        {
                            !props.login ?
                                <>
                                    <Button
                                        onClick={handleNavLogin}
                                        key="Register" variant="outlined" sx={{ border: '3px solid #6200EE', color: '#000', marginRight: 3 }}>
                                        Register
                                    </Button>
                                    <Button
                                        onClick={handleNavLogin}
                                        key="Login" variant="contained" sx={{ border: '1.5px solid #6200EE', backgroundColor: '#6200EE', color: '#fff' }}>
                                        Login
                                    </Button>
                                </>
                                :
                                <>
                                    <Button variant="contained" key='safetyOfficer' sx={{ marginRight: 3, color: '#fff', backgroundColor: '#6200EE' }}>
                                        Property Manager
                                    </Button>
                                    <Button
                                        onClick={handleLogout}>
                                        <span class="account material-symbols-outlined">
                                            account_circle
                                        </span>
                                    </Button>
                                </>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar