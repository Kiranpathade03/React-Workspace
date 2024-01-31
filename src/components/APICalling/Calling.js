import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Calling() {
  const [post, setPost] = useState([]);
  console.log(post);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPost(response.data)
      })
      .catch(error => {
        console.log(error, "error ocuured");
      });
  },);
  return (
    <div>
        {post.map((post)=>{
          <>
          <p>{post.title}</p>
          </>
        })}
    </div>
  )
}

export default Calling;