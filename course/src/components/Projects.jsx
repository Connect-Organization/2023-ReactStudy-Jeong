import React from 'react';
export default function Projects({year, project, part, date}) {
    return (
        <div style={{
           display:'flex',
           gap:"10px" ,
           justifyContent:'center'
        }}>
        {year} | {project} | {part } | {date}
        </div>
    );
}