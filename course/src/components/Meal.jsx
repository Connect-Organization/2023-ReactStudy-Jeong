import React, { useContext } from 'react';
import { AppContext } from '../pages/Market';
import Price from './Price';
export default function Meal() {
    const {items}=useContext(AppContext);
    console.log(items);
    return (
        <div>
            <h2>Meal List 🍜</h2>
            {items.map(item => {
                return (
                    <div key={item.id}>
                    	<div>{item.name}</div>
                    </div>
                );
            })}
            <Price />
        </div>
    );
}

