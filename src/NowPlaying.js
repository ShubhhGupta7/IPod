import React from 'react';
import ImageSource from './asserts/images/song_image.jfif';
class MyMusic extends React.Component{
    
    constructor(){
        super();
        this.state = {
            isMounted : true
        }
    }

    componentDidMount(){
        let self = this;
        self.props.audio.play(); 
            self.props.audio.addEventListener("timeupdate",function(){
                if(self.state.isMounted){
                    var pos = self.props.audio.currentTime/self.props.audio.duration;
                    self.updateTime();
                    let fill = document.getElementById("fill");
                    if(fill !== null){
                        fill.style.width = pos*100 + "%";
                    }
                }
            })
        
    }

    updateTime = () =>{  
        this.setState({
            audio : this.props.audio
        })
    }

    componentWillUnmount(){
        this.state.isMounted = false;
    }

    render(){
        let audio = this.props.audio;
        return(
            <div style={styles.myMusicContainer}>
                <div style={styles.titlebar}>
                        <p style={{fontWeight:'bold'}}>Now Playing</p>
                        <img style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                </div>

                <div style={styles.songInfo}>
                    <img 
                        style= {styles.songImage}
                        src = {ImageSource}
                    />
                    <p>Kinna Sona</p>
                </div>

                <div style={styles.statusBar}>
                    <p style={styles.currTime}>{audio !== null ? Math.floor(audio.currentTime) : '0 / 0'}</p>
                    <div style={styles.seekBar}>
                        <div style={styles.fill} id='fill'></div>
                    </div>
                    <p style={styles.dur}>{audio != null ? Math.floor(audio.duration) : '0 / 0'}</p>
                </div>
                
            </div>
        );
    }
    
}

const styles = {
    myMusicContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    songInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '18px'
    },
    statusBar : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly'
    },
    subInfo : {
        alignSelf : 'center'
    },
    seekBar : {
        width:'70%',
        height:'20%',
        border : '1px solid grey',
        cursor: 'pointer',
        alignSelf : 'center',
        display: 'flex',
    },
    fill : {
        height: '100%',
        backgroundColor: 'green',
    },
    currTime : {
        margin : '0',
        alignSelf : 'center'
    },
    dur : {
        margin : '0',
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

export default MyMusic;