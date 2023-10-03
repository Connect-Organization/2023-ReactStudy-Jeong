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
                name = "Baebin"
                description = "Im backend developer! 🎉"
                image = "https://avatars.githubusercontent.com/u/63220297?v=4"
            />
            <h2>Contact</h2>
            <Contact
                platform = "Blog"
                url = "https://blog.naver.com/baebine"
            />
            <Contact
                platform = "Github"
                url = "https://github.com/Baebin"
            />
            <Contact
                platform = "Instagram"
                url = "https://www.instagram.com/bin040505"
            />
            <h2>Project List</h2>
            <Projects
                year = "2020"
                project = "BB StopWatch [(]App]"
                part = "Developer"
                date = "2020.12"
            />
            <Projects
                year = "2021"
                project = "말하는 앵무새 (알람 TTS) [App]"
                part = "Developer"
                date = "2021.01"
            />
            <Projects
                year = "2021"
                project = "BB 정각 알리미 [App]"
                part = "Developer"
                date = "2021.01"
            />
            <Projects
                year = "2022"
                project = "밥묵자 [App]"
                part = "Developer"
                date = "2022.11"
            />
            <Projects
                year = "2022"
                project = "BBFindingFriends [App]"
                part = "Developer"
                date = "2022.12"
            />
            <Projects
                year = "2023"
                project = "InFoodRoluette [Web]"
                part = "Backend"
                date = "2023.07"
            />
            <Projects
                year = "2023"
                project = "Localhost:Inha [Web]"
                part = "Backend"
                date = "2023.07"
            />
            <Projects
                year = "2023"
                project = "Dingdong [Web]"
                part = "Backend"
                date = "developing"
            />
        </div>
    );
}