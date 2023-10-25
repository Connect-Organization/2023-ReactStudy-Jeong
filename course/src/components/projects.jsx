import React from 'react';

export default function Projects({year,place,position,date}) {
    return (
        <div style={{
           display:'flex',
           gap:"10px" ,
           justifyContent:'center'
           
        }}>
        
        <p>{year} | </p>
        <p>{place} | </p>
        <p>{position} | </p>
        <p>{date}</p>

        </div>
    );
}