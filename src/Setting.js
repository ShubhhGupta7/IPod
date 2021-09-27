import React from 'react';

class Settings extends React.Component{
    
    render(){
        return(
            <div style={styles.settings} >

                <div style={styles.titlebar}>
                        <p style={{fontWeight:'bold'}}>Settings</p>
                        <img style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                </div>
                <div style={{width : '100%' , height : '90%',display:'flex' , flexDirection : 'row' , justifyContent: 'center'}}>
                    <img style={styles.image} src="https://cdn-icons-png.flaticon.com/512/992/992668.png" />
                </div>
            </div>
        );
    }
    
}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    image : {
        width:'65%',
        height:'65%',
        alignSelf : 'center'
    },
    battery: {
        height: 30,
        width: 30, 
    },
    titlebar: {
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        boxSizing: 'border-box',
        padding: '3px',
        backgroundColor: 'lightblue',
        boxShadow: '0px 0px 10px 3px grey inset',
        width: 'inherit',
        height: 30,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1
    }
}

export default Settings;