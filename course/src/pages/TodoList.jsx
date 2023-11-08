import React, { useEffect, useRef, useState } from 'react';

export default function TodoList() {
    const [todo,setTodo] = useState([]);
    const [text,setText] = useState("");
    const isMount = useRef(true);
	
    /*
    1. TodoList의 가져오는 기능의 useEffect:: 구현하기
    2. TodoList의 저장하는 기능의 useEffect:: 구현하기
    3. handleChange() 함수:: 구현하기
    4. handleAdd() 함수:: 구현하기
    */

    // 1. TodoList LocalStorage Getter
    useEffect(()=>{
        const tmpTodo = JSON.parse(localStorage.getItem("todos"));
        // Empty Check
        if (tmpTodo !== null && tmpTodo.length !== 0)
            setTodo(JSON.parse(localStorage.getItem("todos")));
        isMount.current=false;
    }, [])

    // 2. TodoList LocalStorage Setter
    useEffect(()=>{
        if (!isMount.current)
            localStorage.setItem("todos", JSON.stringify(todo));
    }, [todo])
    
    // 3. Text Setter
    function handleChange(event) {
        setText(event.target.value);
    }

    // 4. TodoList Setter
    function handleAdd() {
        let newTodo = [...todo];
        newTodo.push(text);
        setTodo(newTodo);
        setText("");
    }

    return (
        <div>
            <div><h2>TODO LIST 🐢</h2></div>
            {todo && todo.map((list)=>{
                return <div key={list.index}>
                    {list}
                </div>
            })}
            <div>
                <input type="text"
                    onChange={handleChange}
                    value={text}
                    // Keydown Checker
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            handleAdd();
                        }
                    }}
                />
                <button onClick={handleAdd}>추가</button>
            </div> 
        </div>
    );
}