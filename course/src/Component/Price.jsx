import React, { useContext } from 'react';
import { AppContext } from '../Pages/TodoList';

export default function Price() {
    const { items } = useContext(AppContext);

    return (
        <div>
            <h2>Price List 💰</h2>
            {items.map(item => {
                return (
                    <div key={item.id}>
                        <div>{item.name}: ${item.price}</div>
                    </div>
                );
            })}
        </div>
    );
}
