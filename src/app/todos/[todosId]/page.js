"use client";
import '../../../app/styles.css';
import { getTodoByID } from "../../../../api";
import {useEffect, useState} from 'react';
export default function TodoDetails({params}){
    const {todosId} = params;
    console.log(params)
    // open each todo details according to the id in the todolist
    const [todo,setTodo] = useState("");
    useEffect(()=>{
        const fetchTodo = async () =>{
            const todo = await getTodoByID(todosId);
            setTodo(todo);
        }
        fetchTodo();
    },[todosId])

    if (!todo) {
        return <div>Loading...</div>;
    }



    return (
         <div>
            <h1>Todo Details</h1>
            <p>ID: {todo.id}</p>
            <p>Title: {todo.title}</p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
        </div>
    )
}