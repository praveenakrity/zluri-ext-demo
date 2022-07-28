import React from 'react'

const ListBookmarks = ({bookmarks}) => {
  return (
    <ul>
      {
        bookmarks && bookmarks.map((val,i)=>(
          
          <li key={i.toString()}>
            <a target='__blank'
            href={`${val.url}`}>{val.title}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default ListBookmarks