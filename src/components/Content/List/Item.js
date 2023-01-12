import React from 'react'
import { useTodo } from '../../../contexts/TodoContext'

function Item({todo}) {

const {toggleTodo,setTodos}=useTodo();

const onChange=(id)=>{


toggleTodo(id)

}



  return (
    <li key={todo.id} className={todo.completed?"completed":""}>
    <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={()=>onChange(todo.id)}/>
        <label>{todo.text}</label>
        <button className="destroy"></button>
    </div>
</li>
  )
}

export default Item