import React from 'react';
import Screen from './Screen';
import ZingTouch from 'zingtouch';
import KinnaSona from './asserts/music/kinnasona.mp3';

/*
Name : Shubh Gupta
Project: Ipod in React
*/ 



class IPod extends React.Component{

    constructor(){
        super();
        this.state = {
            activeItem : 'NowPlaying',
            activePage : 'Home',
            enter : 0,
            play : true,
            vol: 1.0
        }
    }

    rotateWheel = () => {
        var containerElement = document.getElementById('inner-container');
        var activeRegion = new ZingTouch.Region(containerElement);
        var change = 0;
        var self = this;
        self.state.enter = self.state.enter + 1;
        
        if(self.state.enter < 2){
            activeRegion.bind(containerElement, 'rotate', function(event){            
                var newAngle = event.detail.distanceFromLast;
        
                if(newAngle < 0){
                    change++;
                    if(change === 15){
                        change = 0;
                        if(self.state.activePage === 'Home'){
                            if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "NowPlaying"
                                })
                            } else if(self.state.activeItem === 'NowPlaying'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }else if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }
                        }else if(self.state.activePage === 'Music'){
                            if(self.state.activeItem === 'NowPlaying'){
                                self.setState({
                                    activeItem : "Playlist"
                                })
                            }else if(self.state.activeItem === 'Playlist'){
                                self.setState({
                                    activeItem : "NowPlaying"
                                })
                            }
                        }
                    }
                }else{
                    change++;
                    if(change === 15){
                        change = 0;
                        if(self.state.activePage === 'Home'){
                            if(self.state.activeItem === 'NowPlaying'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "NowPlaying"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }
                        }else if(self.state.activePage === 'Music'){
                            if(self.state.activeItem === 'NowPlaying'){
                                self.setState({
                                    activeItem : "Playlist"
                                })
                            }else if(self.state.activeItem === 'Playlist'){
                                self.setState({
                                    activeItem : "NowPlaying"
                                })
                            }
                        }
                    }
                }
                });
        }
    }

    choose = () => {
        if(this.state.activeItem === 'Music'){
            this.setState({
                activeItem : 'NowPlaying',
                activePage : this.state.activeItem
            })
        }else if(this.state.activeItem === 'NowPlaying'){
            this.setState({
                activeItem : 'NowPlaying',
                activePage : 'NowPlaying'
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : this.state.activeItem
            })
        }
    }

    backOrMenu = () => {

        if(this.state.activeItem === 'NowPlaying' || this.state.activeItem === 'Playlist'){
            this.setState({
                activeItem : 'Music',
                activePage : 'Home'
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : 'Home'
            })
        }
        
    }

    toggle = () =>{
        if(this.state.play === true){
            this.state.audio.pause();
            this.setState({
                play : false
            })
        }else{
            this.state.audio.play();
            this.setState({
                play : true
            })
        }
    }

    increaseVolume = () => {
        if(this.state.play === true){
            let volume = this.state.vol;
            volume += 0.2;
            if(volume >= 1.0) {
                return;
            }
    
            this.state.audio.volume = volume;
            this.setState({
                vol : volume
            })
        }
    }

    decreaseVolume = () => {
        if(this.state.play === true){
            let volume = this.state.vol;
            volume -= 0.1;
            if(volume <= 0.0) {
                return;
            }

            this.state.audio.volume = volume;
            this.setState({
                vol : volume
            })
        }
    }

    componentDidMount(){
        let audio = document.getElementsByClassName("audio-element")[0];
        console.log(audio)
        this.setState({
            audio : audio,
        })
    }

    render() {  
        return(
            <div className ="ipod"> 
                <audio className = 'audio-element'> 
                    <source src = {KinnaSona}></source>
                </audio>

                <Screen 
                    data = {this.state}
                />

                <div 
                    style = {styles.navContainer}
                    className = "navigation"    
                    onMouseOver = {this.rotateWheel}
                    id = "inner-container"
                > 
                    <div
                        className = "nav-actions"
                        style = {styles.menu}
                        onClick = {
                            this.backOrMenu
                        }
                        >Menu</div>
                    <i
                        style = {styles.play}
                        className = "nav-actions fas fa-pause"
                        src = "https://cdn-icons-png.flaticon.com/512/151/151859.png"
                    
                        onClick = {this.toggle}
                    ></i>
                    <i 
                        style = {styles.forw}
                        className = "nav-actions fas fa-fast-forward"
                    
                        onClick = {this.increaseVolume}
                    ></i> 
                    <i 
                        style = {styles.back}
                        className = "nav-actions fas fa-fast-backward"
                    
                        onClick = {this.decreaseVolume}
                    ></i>
                    <div className = "backBtn"
                        className = "nav-actions"
                        style = {styles.home}
                        
                        onClick={this.choose}
                        ></div>
                </div>
            </div>
        );
    }
}



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
        left: '70px',
        top: '115px'
    }
}

export default IPod;