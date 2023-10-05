import React from 'react';
export default function Contact({title,url,detail}) {
    return (
        <div>
            <div>
                <div style={{display:"inline-block"}}>{title}: </div>
                <div style={{display:"inline-block"}}>
                    <a style={{textDecoration:"none",color:"#618264"}} href={url}>
                        {detail}
                    </a>
                </div>
            </div>
        </div>
    );
}