import React from 'react'
import { useEffect } from 'react'
import ListBookmarks from './ListBookmarks'

const ShowBookmarks = ({type, bookmarks}) => {
  
  useEffect(()=>{
      console.log(type)
    },[type])

    // console.log(bookmarks)
  
    return (
    <>
    <br></br>
    {
      type === 1 ? <h1>{`Bookmarks Bar List`}</h1>: <h1>{`Other Bookmarks Bar List`}</h1>
    }<br></br>
    &nbsp;
    <ListBookmarks bookmarks={bookmarks} />
    </>
  )
}

export default ShowBookmarks