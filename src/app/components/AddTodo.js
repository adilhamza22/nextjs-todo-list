import { useState } from 'react';

export default function AddTodo({ onAdd }) {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        const newTask = await onAdd(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                style={{background:"white",color:"black",border:"1px solid purple"}} 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add new todo"
            />
            <button  style={{background:"white",color:"black",border:"1px solid purple"}} type="submit">Add</button>
        </form>
    );
}
