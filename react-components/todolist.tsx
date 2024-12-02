/*
TSX implementation of a simple todo list. Incorperates interface declaration, 
CRUM stuff, and some helpful array/state manipulation. 

12/2/2024
*/




"use client"

import { useState } from "react";

export default function TodoList() {

    interface Todo {
        name : string
        completed: boolean
    }

    const [toAdd, setToAdd] = useState<string>("")
    const [todolist, setTodolist] = useState<Todo[]>([])

    const handleSubmit = (e:any) => {
        e.preventDefault()

        const toAddObject:Todo = {
            "name": toAdd,
            "completed": false
        }

        setToAdd("");
        setTodolist([...todolist, toAddObject])
    }

    return (
        <div>
            <form className="flex mb-2" onSubmit = {handleSubmit}>
                <input placeholder = "add to list" className = "text-black w-64" type="text" value = {toAdd} onChange={(e)=> {
                    setToAdd(e.target.value);
                }}/>
            </form>
            {todolist.map((item:Todo, index:number) => (
                <div key = {index} className="flex bg-gray-600 rounded p-1 my-1 w-64 items-center">
                    <p>{item.name}</p>
                    <button className="ml-auto p-1 bg-red-800 hover:bg-red-700 rounded" onClick = {() => {
                        const updatedTodo:Todo[] = [...todolist];
                        updatedTodo.splice(index, 1);
                        setTodolist(updatedTodo);
                    }}>remove</button>
                    <input className="ml-3" type = "checkbox" checked={item.completed} onChange={(e:any) => {
                        const updatedTodo:Todo[] = [...todolist];
                        updatedTodo[index].completed = e.target.checked;
                        setTodolist(updatedTodo);
                    }}/>
                </div>
            ))}
        </div>
    )

}