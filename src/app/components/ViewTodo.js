export default function ViewTodo({ todo, onUpdate, onDelete }) {
    const handleToggle = async () => {
        const updatedTodo = { ...todo, completed: !todo.completed };
        await onUpdate(todo.id, updatedTodo);
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
            />
            {todo.title}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
            <button onClick={() => onUpdate(todo.id)}>Update</button>
        </li>
    );
}