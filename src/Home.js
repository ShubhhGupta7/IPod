import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Home = (props) => {

    return(
        <div style={styles.homeScreen} id='home-screen'>
            <div style={styles.menuList} id='menu-list'>
                <div style={styles.titlebar}>
                    <p style={{fontWeight:'bold'}}>iPod</p>
                    <img style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                </div>
                <ListGroup style={{borderRadius:'0'}}>
                    <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={props.activeItem==='NowPlaying'?'active':''}>
                        Now Playing {props.activeItem==='NowPlaying'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                    </ListGroup.Item>
                    <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={props.activeItem==='Music'?'active':''}>
                        Music {props.activeItem==='Music'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                    </ListGroup.Item>
                    <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={props.activeItem==='Games'?'active':''}>
                        Games {props.activeItem==='Games'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                    </ListGroup.Item>
                    <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={props.activeItem==='Settings'?'active':''}>
                        Settings {props.activeItem==='Settings'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div style={styles.imageContainer} id='image-container'>
            </div>
        </div>
    );
}

const styles = {
    homeScreen : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirecton : 'row'
    },
    menuList : {
        //border:'1px solid black',
        height : '100%',
        width : '50%',
        boxShadow: '10px 0px 15px -5px rgba(0,0,0,0.75)',
        zIndex : '1'
    },
    imageContainer : {
        //border:'1px solid black',
        height : '100%',
        width : '50%',
        backgroundImage : 'url("https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg")',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        borderRadius : '0 12px 12px 0'
    },
    battery: {
        height: 30,
        width: 30, 
    },

    titlebar: {
        borderTopLeftRadius: '1rem',
        boxSizing: 'border-box',
        padding: '3px',
        backgroundColor: 'lightblue',
        boxShadow: '0px 0px 10px 3px grey inset',
        height: 30,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1
    }
}

export default Home;