import React from 'react';

const Titlebar = (props) => {
    return (
        <div style = {styles.titlebar}>
            <p style = {{fontWeight: 'bold'}} >IPOD</p>
            <img 
                src = "https://cdn-icons-png.flaticon.com/512/3103/3103446.png"
                alt = "battery-percentage"
                style = {styles.battery}
            />
        </div>
    );
}

export default Titlebar;


const styles = {
    battery: {
        height: 30,
        width: 30, 
    },

    titlebar: {
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        boxSizing: 'border-box',
        padding: '3px',
        backgroundImage: 'linear-gradient(white, grey)',
        width: 'inherit',
        height: 30,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}