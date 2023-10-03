import React from 'react';
import Profile from '../components/profile';
import Contact from '../components/contact';
import Projects from '../components/projects';
export default function NameCard() {
    return (
        <div style={{
            width:'100vw',
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
        }}>
            
            <Profile 
            />

            <h2>Contact</h2>
            <Contact
             
            />
            
            <h2>Project List</h2>
            <Projects 
            />
            
        </div>
    );
}