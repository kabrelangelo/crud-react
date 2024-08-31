import React from 'react';
import { useState } from 'react';

const Todo = () => {
    const [todos, setTodos]=useState([{
        id:1,
        task:"Learn React"
    },
    {
        id:2,
        task:"Create a todo list"
    },
    {
        id:3,
        task: "To be a pro in React"
    }
])

const [addTodos, setAddTodos]=useState("")



const myTodos=todos.map((todo)=> {return(
<div key={todo.id}>
<div className="card bg-gray-100 rounded-box grid h-20 place-items-center">
{todo.task}
<button
        type="button"
        className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
        onClick={()=>handleDelete(todo.id)}
      >
        Clear
      </button>
</div>
<div className="divider py-2"></div>
</div>
)})


const handleDelete=(id)=>{
  // const todosCopy=[...todos]
  const todoDelete= todos.filter((todo)=>(todo.id!==id))
 setTodos(todoDelete)
 }

const handleChange=(e)=>{
  setAddTodos(e.target.value)
}

const handleSubmit= (e)=>{
    e.preventDefault();
   const todosCopy=[...todos]
   const id=new Date().getTime()
   todosCopy.push({id,task:addTodos})
   setTodos(todosCopy)
   setAddTodos("")
}
    return (
       <>
        <div className="flex w-128 flex-col my-5 mx-10">
 
 {myTodos}
</div>
     <form action="" onSubmit={handleSubmit} >
    <div className="flex justify-center items-center w-full">
  <input
  value={addTodos}
    id="task"
    className="border border-gray-700 sm:text-sm py-5 mx-10 mt-5 text-center w-full"
    placeholder="Entrer une tâche à réaliser..."
    onChange={handleChange}
  />
</div>
<div className="flex items-center justify-center gap-2 bg-white p-3">
      

      <button
        type="submit"
        className="rounded bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700"
      >
        Add
      </button>
    </div>
       </form>
</>
    );
};

export default Todo;