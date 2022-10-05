import { Info } from '@mui/icons-material'
import React from 'react'
import "./Widgets.css"

const Widgets = () => {
    const newsArticle = (heading, subtitlle) =>{
        return <div className="widgets_article">
            <div className="article_left">
                <Info className='icon'/>
            </div>

            <div className="article_right">
                <h4>{heading}</h4>
                <p>{subtitlle}</p>
            </div>
        </div>
    }
  return (
    <div className='widgets'>
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <Info/>
            </div>

            {newsArticle("Tesla","It is leading no 1 automation car company.")}
            {newsArticle("Microsoft","standalone application and as part of the Microsoft Office 365 suite.")}
            {newsArticle("Apple","Bright: smart, visually neat, expensive.")}
            {newsArticle("Meta"," Meta builds technologies that help people connect, find communities, and grow businesses.")}
            {newsArticle("Techcrunch","online newspaper focusing on high tech and startup companies.")}
    </div>
  )
}

export default Widgets