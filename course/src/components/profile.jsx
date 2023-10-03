import React from 'react';
export default function Profile({img,name,descib}) {
    return (
        <div style={{textAlign:"center"}}>
            <img
                src={"https://images.pexels.com/photos/1921336/pexels-photo-1921336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                alt="profile"
                style={{
                    borderRadius: "50%",
                    width:"300px",
                    height: "300px",
                    objectFit: "cover"
                }}
            />
            <h1> Dana</h1>
            <h4>Learner developer^^</h4>

        </div>
        
    );
}