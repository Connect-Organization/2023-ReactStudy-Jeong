import React from 'react';
export default function Profile({name, description, image}) {
    return (
        <div style={{textAlign:"center"}}>
            <img
                src={image} 
                alt="profile"
                style={{
                    borderRadius: "50%",
                    width:"300px",
                    height: "300px",
                    objectFit: "cover"
                }}
            />
            <h1>{name}</h1>
            <h3>{description}</h3>
        </div>
    );
}