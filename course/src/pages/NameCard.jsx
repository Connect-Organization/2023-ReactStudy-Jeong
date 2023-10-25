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
            img= 'https://images.pexels.com/photos/1921336/pexels-photo-1921336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            name="Dana"
            descib = 'Learner developer^^'
            />

            <h2>Contact</h2>
            <Contact
            title1 = 'Github :'
            username1 = 'dana2808'
            title2= " Email :"
            username2= 'danahmdv@gmail.com'
             
            />
            
            <h2>Project List</h2>
            <Projects
            year = '2023'
            place = 'Connect'
            position= 'FrontEnd'
            date = '2023.08.09' 
            />
            
        </div>
    );
}