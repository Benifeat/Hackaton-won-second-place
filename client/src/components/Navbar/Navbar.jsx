import { AppBar, Toolbar, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import EzratHaverLogo from '../../assets/EzratHaverLogo.svg'
import ThemeSwitcher from '../../theme/ThemeSwitcher.jsx'
import '../../index.css'

import Pop from '../Forms/pop.jsx'
import Login from '../Forms/Login.jsx'
import Register from '../Forms/Register.jsx'

function Navbar() {
    return (
        <AppBar position="static" className="bg-background">
            <Toolbar className="bg-background">
                <Box sx={{ flexGrow: 1 }}>
                    <Link to="/">
                        <img src={EzratHaverLogo} alt="Ezrat Haver Logo" className="h-24" />
                    </Link>
                </Box>

                <Button className='text-gray-500' component={Link} to="/">Home</Button>
                <Button className='text-gray-500' component={Link} to="/about">About</Button>
                <Button className='text-gray-500' component={Link} to="/contact">Contact</Button>
                <Button className='text-gray-500' component={Link} to="/map">Map</Button>                
                <Button className='text-gray-500' component={Link} to="/donations">Donations</Button>                
                <Button className='text-gray-500' component={Link} to="/faq">FAQ</Button>
                <Button className='text-gray-500' component={Link} to="/calendar">Calendar</Button>
                <Button className='text-gray-500' component={Link} to="/Posts">Posts</Button>
                
                <Pop className='mr-3' txt={'Login'}>
                    <Login/>
                </Pop>
                
                <Pop className='mr-3' txt={'Register'}>
                    <Register/>
                </Pop>

                <ThemeSwitcher/>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar