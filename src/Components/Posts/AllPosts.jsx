import React, {useState} from 'react'
import Form from './Form'

function AllPosts() {
  const [posts, setPosts] = useState([])

  return (
    <div>
        <Form setPosts={setPosts}/>
        {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.text }</p>

                </div> 
            ))}
    </div>
  )
}

export default AllPosts