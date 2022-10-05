import React,{ useEffect, useState } from 'react'
import './Feed.css'
import Post from './Post';
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useSelector } from 'react-redux/es/exports';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';
//ICONS
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@mui/icons-material/Subscript';
import EventNoteIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';


const Feed = () => {
  const user = useSelector(selectUser)
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState("")

  async function fetchData(){
    const q = query(collection(db, "posts"), orderBy("timeStamp", "desc"))
    const snap = await getDocs(q)
    
    const arr = snap.docs.map((doc)=>(
      {
      id: doc.id,
      data: doc.data()
      }
    ))
   setPosts(arr)
  }

  const send = (e)=>{
    e.preventDefault()

    addDoc(collection(db, 'posts'),{
      name: user.displayName,
      desc: user.email,
      message: input,
      photoRef: user.photoUrl || " ",
      timeStamp: serverTimestamp()
    })
    setInput("")
    fetchData()
  }

  useEffect(()=>{
    fetchData()
  }, [])


  return (
    <div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon/>

                <form>
                  <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='create post'/>
                  {/* button is not shown in UI */}
                  <button type='submit' onClick={send}></button>
                </form>
            </div>

            <div className="feed_inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
                <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7433E' />
                <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd' />
                <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />
            </div>
        </div>


        {/* POSTS */}
        <FlipMove>
        {posts.map( ({ id, data:{ name, desc, message, photoUrl }}) => {
          return <Post 
            key={id}
            name={name}
            desc={desc}
            msg={message}
            photoUrl={photoUrl}
          />
        })}
        </FlipMove>
    </div>
  )
}

export default Feed