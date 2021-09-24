import React from 'react';
import artistImage from './asserts/images/profile.jpeg';

class Artists extends React.Component{
    
    render(){
        return(
            <div style={styles.artistsContainer}>

                 <div style={styles.titlebar}>
                        <p style={{fontWeight:'bold'}}>IPOD</p>
                        <img style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                    </div>

                <div style={styles.info}>
                    <div style={styles.imageContainer}>
                    </div>
                    
                    <div style={styles.subInfo}>
                        <h1 style={{margin:'0rem'}}>IPOD.JS</h1>
                        <p style={{marginBottom:'0'}}> React Project</p>
                    
                    </div>
                    
                </div>

                <div style={styles.info2}>
                <h5 style={{alignSelf : 'center'}}>
                    Made By: Shubh Gupta
                </h5>
                </div>
            </div>
        );
    }
    
}

const styles = {
    artistsContainer : {
        height : 'inherit',
        width : 'inherit',
        display : 'flex',
        flexDirection : 'column',
    },
    imageContainer : {
        height : '65%',
        width : '35%',
        borderRadius : '55%',
        backgroundImage : `url(${artistImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignSelf : 'center'
    },
    image : {
        width: '2rem',
        height : '2rem'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    info2 : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    subInfo : {
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
        backgroundImage: 'linear-gradient(white, grey)',
        width: 'inherit',
        height: 30,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}

export default Artists;