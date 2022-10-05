import React from 'react'
import { useDispatch } from 'react-redux/es/exports';
import './Header.css';
import { HeaderOption } from './HeaderOption';
import { logout } from '../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';


//ICONS
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
  const dispatch = useDispatch()

  const logofApp = async () =>{
      await signOut(auth)  
      dispatch(logout())
  }
  
  return (
    <div className='header'>
        <div className="header_left">
            <LinkedInIcon style={{fontSize: '40px', color: '#0077b5'}} />
            <div className="header_search">
                <SearchIcon/>
                <input type="text"  placeholder='search'/>
            </div>
        </div>

        <div className="header_right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messages"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption onClick={logofApp} title="Account" avatar={true} />
        </div>
    </div>
  )
}

export default Header