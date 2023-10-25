import React from 'react';
export default function Profile({img,name,descib}) {
    return (
        <div style={{textAlign:"center"}}>
            <img
                src={img} 
                alt="profile"
                style={{
                    borderRadius: "50%",
                    width:"300px",
                    height: "300px",
                    objectFit: "cover"
                }}
            />
            <h1>{name}</h1>
            <h4>{descib} ✨</h4>
        </div>
        
    );
}