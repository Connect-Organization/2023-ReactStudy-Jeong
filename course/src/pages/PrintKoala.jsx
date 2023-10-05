import React from 'react';

export default function PrintKoala() {
    const handleClick=()=>{
        alert("클릭에 성공했습니다!");
    }
    return (
       <>
        <h2>클릭 해주세요!</h2>
        <h3>김민정입니다!</h3>
        <button onClick={handleClick}>✨🐨 Click ME! 🐨✨</button>
       </>
    );
}

