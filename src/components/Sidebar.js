import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { Avatar } from '@mui/material'
import './Sidebar.css'
import { selectUser } from '../features/userSlice'

const Sidebar = () => {
  const user = useSelector(selectUser)

  const recent = (topic) =>{
    return(<div className="sidebar_recentItem">
       <span className="sidebar_hash">#</span>
       <p>{topic}</p>
     </div>)
  }
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img  src="https://images.unsplash.com/photo-1552152370-fb05b25ff17d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" />
        <Avatar className='sidebar_avatar' src={user.photoUrl}>
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">545</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on your post</p>
          <p className="sidebar_statNumber">1785</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recent('reactjs')}
        {recent('programming')}
        {recent('building')}
        {recent('design')}
        {recent('developer')}
      </div>
    </div>
  )
}

export default Sidebar