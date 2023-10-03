import React from 'react';
export default function Contact({platform, url}) {
    return (
        <div>
            <div>
                <div style={{display:"inline-block"}}>📁{platform}:</div>
                <div style={{display:"inline-block"}}>
                    <a href={url}>This is My {platform}</a>
                </div>
            </div>
        </div>
    );
}