import './Post.css';
import React, { forwardRef } from 'react'
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({ name, desc, msg, photoUrl }, ref) => {
  return (
    <div className="post">
        <div className="post_header">
            <div className="post_info">
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
        </div>

        <div className="post_body">
                <p>{msg}</p>
        </div>

        <div className="post_buttons">
            <InputOption Icon={ThumbUpOffAltIcon} title='Like' color='grey'/>
            <InputOption Icon={ChatIcon} title='Message' color='grey'/>
            <InputOption Icon={ShareIcon} title='Share' color='grey'/>
            <InputOption Icon={SendIcon} title='Send' color='grey'/>
        </div>
    </div>
  )
})

export default Post