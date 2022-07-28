import React, { useState } from 'react'
import { getChildrenBookmark } from '../../services/bookmarks'
import ShowBookmarks from './ShowBookmarks'

const BookmarksCTA = () => {
    const [bookmarks, setBookmarks] = useState(null)
    const [type, setType] = useState(null)

   /*  useEffect(()=>{
      console.log(`run useEffect`)
    },[type]) */

  return (
    <div className='d-flex flex-column justify-content-center align-items-center pt-5'>
        <button type="button" className="btn btn-primary btn-lg"
        onClick={() => {
          getChildrenBookmark('1',setBookmarks)
          setType(1)
        }}
        >Get Bookmarks Bar List</button><br></br>
        <button type="button" className="btn btn-success btn-lg"
        onClick={() => {
          getChildrenBookmark('2',setBookmarks)
          setType(2)
        }}>Get Other Bookmarks List</button>
        <br></br>
        {
            bookmarks ? <ShowBookmarks type={type} bookmarks={bookmarks}/> : ``
        }
    </div>
  )
}

export default BookmarksCTA