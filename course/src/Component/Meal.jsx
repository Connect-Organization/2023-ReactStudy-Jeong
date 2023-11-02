import React, { useContext } from 'react';
import { AppContext } from '../Pages/Market';
import Price from './Price';

export default function Meal() {
    const { items } = useContext(AppContext);

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
