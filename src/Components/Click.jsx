import React from 'react'

function Click() {
   const handleClick = (event) => {
   console.log(event.target.textContent)
   }

  return (
    <div onClick={handleClick}>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero, totam reiciendis quae, laudantium ducimus est commodi dignissimos veniam consectetur vero quam. Nostrum corrupti natus quisquam vero doloribus. Sint, doloremque?
    </p> 
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil illo ea reprehenderit doloribus, sequi, itaque aut cum explicabo sit qui vel architecto repudiandae alias pariatur! Inventore libero esse possimus voluptatem.
    </p>
    <p>Text 3</p>
    </div>
  )
}

export default Click