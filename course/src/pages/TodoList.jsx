import React, { useEffect, useRef, useState } from 'react';
import styles from "../styles/TodoList.module.css";
/*
1. 배열 형태인 state 하나 이용해서 구현하기
ex) [{content:"멋지게 기상하기", index : 0},{//},{//},{//}]

2. 위의 state를 map으로 돌면서, 요소 하나하나 보여주기
=> 네모칸 안에 content 있고, 우측에 삭제 버튼 존재
hint : map으로 돌 경우, 현재 해당하는 배열 내의 원소에는 content와 index가 있을 것.

3. todo 추가하기
=> setState 이용하되, state.push를 이용해서 객체 하나 추가하면 되겠죠? 이때 index는 기존 배열의 길이.

4. todo 삭제하기
=> map을 돌 때 내부 정보에 index값이 있기 때문에, 이 index를 이용해서 setState 내에서 filter 함수를 이용해서 삭제해주면 될 듯.

5. 로컬 스토리지 저장하기
=> JSON.stringfy와 JSON.parse를 사용하기
*/

export default function TodoList() {
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
        setTodo([...todo,{index:todo.length,content:text}]);
        setText('');
    }
    const handleDelete=(list)=>{
        // if를 통해 todo 감지, 만약 todo가 결과적으로 빈 배열이 될 경우
        // 위의 저장 로직 강제적으로 실행하도록.
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
        }}>
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