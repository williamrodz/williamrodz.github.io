import React from 'react';
import AIselection from './tictactoe/AISelection.png';
import ChooseEmojis from './tictactoe/ChooseEmojis.png';
import DarkMode from './tictactoe/DarkMode.png';
import DarkModeAI from './tictactoe/DarkModeAI.png';
import HomeScreen from './tictactoe/HomeScreen.png';
import Unicorn from './tictactoe/Unicorn.png';
import appIcon from './tictactoe/icon.png'
import Button from 'react-bootstrap/Button';

import './tictactoe.css'

const Photo = (props) =>{
    return (
        <div className="image-container ">
            <img alt="Screenshot previewing one of app's views" className="galleryPhoto" src={props.photoSource}/>
        </div>
    )
}

 const AppIcon = (props) =>{
     return (<img alt="app icon"className="appIcon" src={appIcon}/>)
 }


const Gallery = (props) =>{
    var photos = []

    for (var i =0; i<props.photos.length; i++){
        let photo = <Photo key={i} photoSource={props.photos[i]}/>
        photos.push(photo);
    }

    return (
    <div className="flexRow gallery">
        {photos}
    </div>
    )
}

const AppDescription = (props) =>{
    return (
        <div className="flexColumn">
            <div className="tagLine">
                <h4>Play against a friend or against an AI with three different levels!</h4>
                <h4>Choose your avatar out of the set of emojis and play against a friend or an AI.</h4>
                <h4>Dark mode compatible! </h4>
            </div>
            <div className="descriptionBody">
<div className="descriptionTitle">Enjoy a modern spin on classic game</div>
{<br/>}
Instead of simple X's and O's, choose your avatar out of the hundreds of emoji characters. 

<div className="descriptionTitle">Play against a friend or an AI!</div>
You can have fun with a nearby friend and play multiple rounds! However, you can go solo against an AI with three different difficulty modes.

<div className="descriptionTitle">Keep track of scores</div>

Playing best two out of three? Best 5 out of 7? Or have your own custom set of games? Keep track of winners of multiple games as you play multiple rounds of Tic Tac Toe.

<div className="descriptionTitle">Dark mode compatible</div>

Playing at night or simply prefer the darker aesthetic? The app is dark mode compatible to supplement your most comfortable viewing experience.      
            </div>            
        </div>
    )
}

const SupportRow = (props) =>{
    return (
        <div className="supportRow">
            <h4>Got a question, need support, or have suggestions?</h4>
            <Button variant="primary" href="mailto:support@wi11iam.com">Email Support</Button>
        </div>
    )
}

const CopyRightRow = (props) => <div className="copyrightRow">Copyright William A. Rodriguez Jimenez</div>



const EmojiTacToe = (props) =>{

    let photos = [AIselection,ChooseEmojis,DarkMode,DarkModeAI,HomeScreen,Unicorn]
    return(
        <div className="tictactoeContainer flexColumn">
            <div className="flexRow appDescriptionRow" onClick= {() => window.open( "https://apps.apple.com/us/app/emoji-tic-tac-toe/id1558300785")}>
                <AppIcon/>
                <div className="appTitle">Emoji Tic Tac Toe!</div>
            </div>
            <Gallery photos={photos}/>
            <AppDescription/>
            <SupportRow/>
            <CopyRightRow/>
        </div>
    )
}


export default EmojiTacToe;