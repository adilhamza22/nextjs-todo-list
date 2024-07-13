"use client";
import { useState } from "react";
import Link from "next/link";
export default function ViewTodo({ todo, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);

    const handleToggle = async () => {
        const updatedTodo = { ...todo, completed: !todo.completed };
        await onUpdate(todo.id, updatedTodo);
    };
    const handleSave = async () => {
        const updatedTodo = { ...todo, title };
        await onUpdate(todo.id, updatedTodo);
        setIsEditing(false);
    };
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
            />
            {isEditing ? (
                <input
                    style={{ background: "white", color: "black", border: "1px solid purple" }}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            ) : (
                <Link style={{ color: "white" }} href={`/todos/${todo.id}`}>
                    {todo.title}
                </Link>

            )}
            {isEditing ? (
                <button style={{ background: "white", color: "black", border: "1px solid purple" }} onClick={handleSave}>Save</button>
            ) : (
                <button style={{ background: "white", color: "black", border: "1px solid purple" }} onClick={() => setIsEditing(true)}>Update</button>
            )}

            <button style={{ background: "white", color: "black", border: "1px solid purple" }} onClick={() => onDelete(todo.id)}>Delete</button>
            {/* <button style={{background:"white",color:"black",border:"1px solid purple"}}  onClick={() => onUpdate(todo.id)}>Update</button> */}
        </li>
    );
}