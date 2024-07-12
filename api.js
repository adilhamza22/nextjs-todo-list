
const baseURl = 'http://localhost:3002';

export const getAllTodos = async () => {
    const response = await fetch(`${baseURl}/tasks`);
    const tasks = await response.json();
    return tasks;
}
export const addTodo = async (title) => {
    const res = await fetch(`${baseURl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, completed: false })
    });
    const newTask = await res.json();
    return newTask;
}

export const updateTodo = async (id, updatedTodo) => {
    const response = await fetch(`${baseURl}/tasks/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTodo)
    });
    const updatedTask = await response.json();
    return updatedTask;
};

export const deleteTodo = async (id) => {
    await fetch(`${baseURl}/tasks/${id}`, {
        method: 'DELETE'
    });
};