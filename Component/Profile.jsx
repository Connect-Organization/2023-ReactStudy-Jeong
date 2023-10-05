
import React from 'react';
export default function Profile({name,describ}) {
    
    return (
        <div>
            <img style={
                {borderRadius: "50%",
                width:"300px",
                height: "300px",
                objectFit: "cover"}
                }src="https://images.unsplash.com/photo-1647226744190-a01448e954e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"/>
            <h1>{name}</h1>
            <div>{describ}</div>
        </div>
    );
};