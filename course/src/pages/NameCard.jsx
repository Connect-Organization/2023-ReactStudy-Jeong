import React from 'react';
import Profile from '../components/Profile';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
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
                img='https://plus.unsplash.com/premium_photo-1680946468196-a53273b001b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
                name='KimMinjeong'
                describ='Im frontend developer!'
            />
            <h2>Contact</h2>
            <Contact
                title="📂 Github"
                url="https://github.com/minjeongss"
                detail="This is My Github"
            />
            <Contact
                title="📂 Tech Blog"
                url="https://jeonge.tistory.com/"
                detail="This is My Tech Blog!"
            />
            <h2>Project List</h2>
            <Projects 
                year='2023'
                name='귀농귀농'
                position='FrontEnd'
                duration='2023.08-09'
            />
            <Projects 
                year='2023'
                name='오늘뭐하니'
                position='BackEnd'
                duration='2023.08-09'
            />
        </div>
    );
}