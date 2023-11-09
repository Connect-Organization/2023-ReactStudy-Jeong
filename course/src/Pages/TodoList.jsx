import React, { useEffect, useRef, useState } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const isMount = useRef(true);
	
    useEffect(() => {
        const tmpTodos = JSON.parse(localStorage.getItem("todos")) || [];
        if (tmpTodos.length !== 0) {
            setTodos(tmpTodos);
        }
        isMount.current = false;
    }, []);

    useEffect(() => {
        if (!isMount.current) {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [todos])

    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleAdd = () => {
        setTodos([...todos, { index: todos.length, content: text }]);
        setText('');
    }

    return (
        <div>
            <div><h2>할 일 목록 🐢</h2></div>
            {todos && todos.map((todo) => {
                return <div key={todo.index}>
                    {todo.content}
                </div>
            })}
            <div>
                <input type="text" onChange={handleChange} value={text} />
                <button onClick={handleAdd}>추가</button>
            </div>
        </div>
    );
}
