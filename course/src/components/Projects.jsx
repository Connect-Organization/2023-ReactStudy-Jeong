import React from 'react';
export default function Projects({year,name,position,duration}) {
    return (
        <div style={{
           display:'flex',
           gap:"10px" ,
           justifyContent:'center'
        }}>
            <div>{year} |</div>
            <div>{name} |</div>
            <div>{position} |</div>
            <div>{duration}</div>
        </div>
    );
}

