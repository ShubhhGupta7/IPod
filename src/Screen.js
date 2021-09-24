import React from 'react';
import Home from './Home';
import Music from './Music';
import Games from './Game';
import Settings from './Settings';
import MyMusic from './MyMusic';
import Artists from './Artists';

const Screen = (props) => { 
    const {activeItem, activePage, audio} = props.data;
    
    return(
        <div className = 'display' id='screen-container'>
            {activePage==='Home'?<Home activeItem={activeItem}/> : null}
            {activePage==='Music'?<Music activeItem={activeItem}/> : null}
            {activePage==='Games'?<Games /> : null}
            {activePage==='Settings'?<Settings /> : null}
            {activePage==='MyMusic'?<MyMusic audio={audio} /> : null}
            {activePage==='Artists'?<Artists /> : null}    
        </div>
    );
}

export default Screen;