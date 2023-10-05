import React from 'react';
import Profile from '../Component/Profile';
import Projects from '../Component/Project';
import Contacts from '../Component/Contacts';

export default function NameCard() {
    return (
        <div>
            <Profile />

            <h1>contacts</h1>
            <Contacts
            url="https://github.com/jban1001"
            blog="📁github"
            />
            <Contacts
            url="https://blog.naver.com/jban1001"
            blog="📒blog"
            />

            <h1>Project</h1>
            <Projects 
            fir="경력이 없어요!"
            />
            <Projects
            fir="ㅎㅎㅎㅎㅎ"
            />
        </div>
    );
};