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
                img='https://images.unsplash.com/photo-1606584897842-a96afdc259db?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                name='JeongJimin'
                describ='Currently attending Inha Univ.'
            />
            <h2>Contact</h2>
            <Contact
                title="📂 Github"
                url="https://github.com/stxxp"
                detail="This is My Github."
            />
            <Contact
                title="📂 Tech Blog"
                url="https://jmsl7.tistory.com/"
                detail="This is My Tech Blog."
            />
            <h2>Project List</h2>
            <Projects 
                year='2023'
                name='아무말'
                position='student'
                duration='2023.10.25'
            />
            <Projects 
                year='2023'
                name='대잔치'
                position='student'
                duration='2023.10.25'
            />
        </div>
    );
}