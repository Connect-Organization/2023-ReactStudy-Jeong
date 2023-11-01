import React, { createContext, useState } from 'react';
import Meal from '../components/Meal';

export const AppContext=createContext();
export default function Market() {
    const [items, setItems] = useState([
		{id:'m1',name:'토마토',price:'$1400'},
        {id:'m2',name:'수박',price:'$1500'},
        {id:'m3',name:'감자',price:'$1600'}
    ]);
    return (
        <>
            <h1>Welcome To Market</h1>
            <div></div>
            <AppContext.Provider value={{items}}>
                <Meal />
            </AppContext.Provider>
        </>
    );
}

