import React, { useEffect, useRef, useState } from 'react';
import styles from "../styles/TodoList.module.css";

export default function TodoList() {
    //값
    const [todo,setTodo]=useState([]);
    const [text,setText]=useState('');
    const isMount=useRef(true);

    //가져오기
    useEffect(()=>{
        const tmpTodo=JSON.parse(localStorage.getItem("todos"));
        if(tmpTodo.length!==0)
            setTodo(JSON.parse(localStorage.getItem("todos")));
        isMount.current=false;
    },[])
    //저장하기
    useEffect(()=>{
        if(!isMount.current)
            localStorage.setItem("todos",JSON.stringify(todo));
    },[todo])

    //변화 반영하기
    const handleEnter=(e)=>{
        if(e.key==="Enter")
            handleAdd();
    }
    const handleChange=(e)=>{
        setText(e.target.value);
    }
    const handleAdd=()=>{
        if(text.trim()===""){
            alert("빈 값입니다. 다시 입력해주세요!");
        }
        else{
            setTodo([...todo,{index:todo.length,content:text}]);
            setText('');
        }
    }
    const handleDelete=(list)=>{
        setTodo(todo.filter(item=>item.index!==list.index));
    }

    return (
        <div style={{
            backgroundColor:"#D6D46D",
            borderRadius:"20px",
            padding:'20px',
            display:'flex',
            flexDirection:'column',
            gap:'5px'
            }}
            className={styles.all}
        >
            <div className={styles.header}><h2>TODO LIST 🐢</h2></div>
            {todo && todo.map((list)=>{
                return <div className={styles.contentParent} key={list.index}>
                    {list.content}
                    <button className={styles.deleteButton} onClick={()=>handleDelete(list)}>삭제</button>
                </div>
            })}
            <div className={styles.submitParent}>
                <input type="text" onChange={handleChange} onKeyDown={handleEnter} value={text}/>
                <button className={styles.addButton} onClick={handleAdd}>추가</button>
            </div>
            
        </div>
    );
}