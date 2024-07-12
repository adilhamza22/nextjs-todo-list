"use client";
import { useState, useEffect } from 'react';
import AddTodo from "@/app/components/AddTodo";
import ViewTodo from "@/app/components/ViewTodo";
import { getAllTodos, addTodo, updateTodo, deleteTodo } from "../../../api";

export default function Home({params}) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const todos = await getAllTodos();
            setTodos(todos);
        };
        fetchTodos();
    }, []);

    const handleAdd = async (title) => {
        const newTodo = await addTodo(title);
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    const handleUpdate = async (id, updatedTodo) => {
        const updated = await updateTodo(id, updatedTodo);
        setTodos((prevTodos) =>
            prevTodos.map((todo) => (todo.id === id ? updated : todo))
        );
    };

    const handleDelete = async (id) => {
        await deleteTodo(id);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <AddTodo onAdd={handleAdd} />
            <ul>
                {todos.map((todo) => (
                    <ViewTodo
                        key={todo.id}
                        todo={todo}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
        </div>
    );
}