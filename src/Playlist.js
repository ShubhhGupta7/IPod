import React from 'react';
import ImageSource from './asserts/images/song_image.jfif';

class Artists extends React.Component{
    
    render(){
        return(
            <div style={styles.playlistContainer}>
                <div style={styles.titlebar}>
                        <p style={{fontWeight:'bold'}}>Playlist</p>
                        <img style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                </div>

                <div style={styles.playlist}>
                    <img 
                        style= {styles.songImage}
                        src = {ImageSource}
                    />
                    <p>Kinna Sona</p>
                </div>
            </div>
        );
    }
    
}

const styles = {
    playlist: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '18px',
        backgroundColor: 'lightgrey',
        color: 'white'
    },
    songImage: {
        height: '40px',
        width: '40px',
        margin: '1rem'
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

export default Artists;