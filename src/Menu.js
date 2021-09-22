import React from 'react';

const menuList = (props) => {
    return (
        <div className = "menu-list">
            <h1>IPOD</h1>
            <ul> 
                <li>Cover Flow</li>
                <li
                    className = "active"
                >Music</li>
                <li>Games</li>
                <li>Settings</li>
            </ul>
        </div>
    );
}

export default menuList;