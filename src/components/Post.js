import React, { useState, useEffect } from 'react'

function Post(props) {
  useEffect(() => {
    axiosData()
  }, [])

  const [post, setPost] = useState([])

  const axiosData = async () => {
    const id = props.match.params.id
    const rawData = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    const post = await rawData.json()
    console.log(post)
    setPost(post)
  }

  return (
    <div className='App'>
      <h1>{post.title}</h1>
      <h5>{post.body}</h5>
    </div>
  )
}

export default Post
