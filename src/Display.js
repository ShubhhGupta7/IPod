import React from 'react';
import MenuList from './Menu';
import Preview from './Preview';

const Display = (props) => {
    var state = [
        {
            image: 'https://img-premium.flaticon.com/png/512/401/premium/401234.png?token=exp=1632267417~hmac=65bde365e54e955f5f5d9621cbff66a9',
            title: 'Cover Flow', 
            id: 1
        },
        {
            image: 'https://img-premium.flaticon.com/png/512/2995/premium/2995035.png?token=exp=1632267514~hmac=8f5c606b7e9c43e0d5180715ab9ca6f6',
            title: 'Music', 
            id: 2
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/512/13/13973.png',
            title: 'Games', 
            id: 3
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/512/2099/2099058.png',
            title: 'Settings', 
            id: 4
        }
    ]

    const {window} = props.data;

    return (
        <div className = "display" >
            {window === 'menu' && 
                <MenuList />
            }
            {window === 'cover-flow' &&
                <Preview data = {state[0]} />
            }
            {window === 'music' &&
                <Preview data = {state[1]} />
            }
            {window === 'game' &&
                <Preview data = {state[2]} />
            }
            {window === 'settings' &&
                <Preview data = {state[3]} />
            }
        </div>
    );
}

export default Display;