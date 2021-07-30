import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  useEffect(() => {
    axiosData()
  }, [])

  const [posts, setPosts] = useState([])
  console.log(posts)

  const axiosData = async () => {
    const rawData = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await rawData.json()
    const posts = data.slice(0, 10)

    setPosts(posts)
  }

  return (
    <div className='App'>
      <h1>Home</h1>
      {posts.map((post) => (
        <Link to={`/${post.id}`}>
          <p key={post.id}>{post.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default Home
