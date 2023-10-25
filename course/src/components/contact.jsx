import React from 'react';
export default function Contact({title1,username1,title2, username2}) {
    return (
        <div>
            <div>
                <div style={{display:"block"}}><center>{title1} {username1} </center> </div>
                <div style={{display:"block"}}> {title2} {username2} </div>
            </div>
        </div>
    );
}