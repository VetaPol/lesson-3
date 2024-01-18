import React from 'react'

function Form(setPosts) {
  const handleSubmit = (e) => {
    e.preventDefault()
     const title = e.target.title.value;
     const text = e.target.text.value;

     const newPost = {
     id: Date.now(),
     title, 
     text,
  };

     setPosts((prevState) => [...prevState, newPost]);
     
      e.target.reset();
  };


  return (
    <form onSubmit={handleSubmit}>
     <input name="title" type="text" placeholder='Title...' required />
     <input  name="text" type="text" placeholder='Text...' required />
     <button>Submit</button>
    </form>
  )
}

export default Form