import React, {useState} from 'react'

function AddTodo({setTodo}) {

const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    

    const newTodo = {
        id: Date.now(),
        title,
        description,
    };

    setTodo((prevState) => [...prevState, newTodo]);
   
    e.target.reset();
};

  return (
    <form onSubmit={handleSubmit}>

     <p>Title</p>
     <input  type="text" name="title" required />

     <p>Description</p> 
     <input  type="text" name="description" required />

     <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddTodo