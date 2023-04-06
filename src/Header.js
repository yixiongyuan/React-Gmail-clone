import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {

    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const signOut = () =>{

        auth.signOut().then(() => {
            dispatch(logout)
        })
       
    }
  return (
    <div className='header'>
        
        <div className="header_left">

            <IconButton>
                <MenuIcon />
            </IconButton>

            <img src="gmail-ar21.svg" alt="gmail label" />
        </div>


        <div className="header_middle">

            <SearchIcon />
            <input placeholder='search mail' type="text" />
            <ArrowDropDownIcon className='header_inputCaret'/>
        </div>


        <div className="header_right">
  
            <IconButton>
                <AppsIcon />
            </IconButton>

            <IconButton>
                <NotificationsIcon />
            </IconButton>

            <Avatar 
            onClick = {signOut}
            src = {user?.photoUrl}/>

        </div>
    </div>
  )
}

export default Header