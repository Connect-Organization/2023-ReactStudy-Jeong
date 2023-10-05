import React from 'react';

export default function Contacts({blog,url}) {
    
    return (
        
        <div>
            <p onClick={()=>{window.open(url)}}>{blog}</p>
        </div>
    );
};