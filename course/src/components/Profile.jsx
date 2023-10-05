import React from 'react';
export default function Profile({img,name,describ}) {
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
            <h3>{describ} 🎉</h3>
        </div>
    );
}