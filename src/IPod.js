import React from 'react';
import Display from './Display';
import Navigations from './Navigations';
import Preview  from './Preview';

class IPod extends React.Component {
    constructor() {
        super();
        this.state = {
            window: 'none'
        }
    }

    handleBackward = () => {
        console.log('Go Backward!');
    }
    handleForward = () => {
        console.log('Go Forward!');
    }
    handlePlay = () => {
        console.log('Do play/Pause');
    }
    handleReturn = () => {
        console.log('Return Back Home');
    }



    handleMenu = () => {
        console.log('Press Menu Button!');
        
        if(this.state.window === 'menu') {
            this.setState({
                window: 'none'
            })
        } else {
            this.setState({
                window: 'menu'
            })
        }
    }

    render() {
        return(
            <div className ="ipod"> 
                <Display data = {this.state}/>
                <Navigations 
                    onBackward = {this.handleBackward}
                    onForward = {this.handleForward}
                    onPlay = {this.handlePlay}
                    onMenu = {this.handleMenu}
                    onReturn = {this.handleReturn}
                />
            </div>
        );
    }
}

export default IPod;