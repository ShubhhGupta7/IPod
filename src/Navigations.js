import React from 'react';

const Navigations = (props) => {
    const {
        onReturn,
        onForward,
        onBackward,
        onPlay,
        onMenu
    } = props

    return (
        <div 
            style = {styles.navContainer}
            className = "navigation"    
        > 
            <div
                className = "nav-actions"
                style = {styles.menu}
                onClick = {() => {
                    onMenu()
                }}
                >Menu</div>
            <img 
                style = {styles.play}
                className = "nav-actions"
                alt = "Play-pause"
                src = "https://cdn-icons-png.flaticon.com/512/151/151859.png"
            
                onClick = {() => {
                    onPlay()
                }}
            />
            <img 
                style = {styles.forw}
                className = "nav-actions"
                alt = "forward"
                src = "https://cdn-icons-png.flaticon.com/512/660/660276.png"
            
                onClick = {() => {
                    onForward()
                }}
            />
            <img 
                style = {styles.back}
                alt = "backward"
                className = "nav-actions"
                src = "https://cdn-icons-png.flaticon.com/512/1250/1250863.png"
            
                onClick = {() => {
                    onBackward()
                }}
            />

            <div className = "backBtn"
                className = "nav-actions"
                style = {styles.home}
                
                onClick = {() => {
                    onReturn()
                }}
                ></div>
        </div>
    );
}

export default Navigations;

const styles = {
    navContainer: {
        position: 'relative',
        backgroundImage: 'linear-gradient(to left, grey, lightgrey)',
        borderRadius: '50%',
        height: 150,
        width: 150
    },

    home: {
        backgroundImage: 'linear-gradient(to left, black, grey)',
        height: 60,
        width: 60,
        borderRadius: '50%',
        left: '45px',
        top: '45px'
    },
    
    menu: {
        left: '55px',
        top: '15px',
        fontWeight: 'bold'
    },

    forw: {
        left: '115px',
        top: '65px'
    },

    back: {
        left: '10px',
        top: '65px'
    }, 

    play: {
        left: '65px',
        top: '115px'
    }
}