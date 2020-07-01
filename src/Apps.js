import React, { useState } from 'react';
import './App.css'


function Todo({ todo, index, completeTodo, removeTodo }) {
    return (<div
        style={{ textDecoration: todo.iscompleted ? 'line-through' : '' }}
        className="todo">
        {todo.text}
        <div>
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={removeTodo}>Delete</button>
        </div>
    </div>
    )
}
function Todoform({ addTodo }) {
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue(' ');

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                className="input"
                value={value}
                placeholder="Add Todos"
                onChange={e => setValue(e.target.value)} />
        </form>
    )
}

function Apps() {
    const [todos, setTodos] = useState([
        {
            text: 'learn about react',
            iscompleted: false
        },
        {
            text: 'learn about Html',
            iscompleted: false
        },
        {
            text: 'learn about reactnative',
            iscompleted: true
        },
        {
            text: 'learn about react redux',
            iscompleted: false
        },
    ]);
    const addTodo = text => {
        const newTodo = [...todos, { text }];
        setTodos(newTodo);
    }
    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].iscompleted = true;
        setTodos(newTodos);

    }
    const removeTodo = e => {
        const newTodos = [...todos];
         const {id}=e.target.parentElement;
        newTodos.splice(id,1);
        setTodos(newTodos);

    }
    return (
        <div className="App">
            <div className="todo_list">
                <h4>Todo Apps with React Hooks </h4>
                {todos.map((todo, index) => (
                    <Todo key={index} index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo} />
                ))
                }
                <Todoform addTodo={addTodo} />
            </div>
        </div>)
}
export default Apps;
