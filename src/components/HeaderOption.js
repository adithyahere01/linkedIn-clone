import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
import { selectUser } from '../features/userSlice'
import { useState } from 'react'

export const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const [ model, showModel ] = useState(false)
  const user = useSelector(selectUser)

  return (
    <div className="headerOption" onClick={onClick} onMouseOver={()=> showModel(true)} onMouseOut={()=> showModel(false)}> 
        {Icon && <Icon className="headerOption_icon"/>}
        {avatar && (
            <Avatar className='headerOption_icon' src={user?.photoUrl}>
              {user?.email[0]}
            </Avatar>
        )}
        <h3 className="headerOption_title">{title}</h3>

        {(avatar && model) && <p className='logout_model'>Click to logout</p>}
    </div>
  )
}
