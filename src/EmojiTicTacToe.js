import React from 'react';
import AIselection from './tictactoe/AISelection.png';
import ChooseEmojis from './tictactoe/ChooseEmojis.png';
import DarkMode from './tictactoe/DarkMode.png';
import DarkModeAI from './tictactoe/DarkModeAI.png';
import HomeScreen from './tictactoe/HomeScreen.png';
import Unicorn from './tictactoe/Unicorn.png';
import appIcon from './tictactoe/icon.png'


const Photo = (props) =>{
    return (
        <div className="image-container ">
            <img className="galleryPhoto" src={props.photoSource}/>
        </div>
    )
}

 const AppIcon = (props) =>{
     return (<img className="appIcon" src={appIcon}/>)
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
            <h3>Play against a friend or against an AI with three different levels! Choose your avatar out of the set of emojis and play against a friend or an AI. Dark mode compatible! </h3>
            <div className="descriptionBody">
<h4>Enjoy a modern spin on classic game</h4>
{<br/>}
Instead of simple X's and O's, choose your avatar out of the hundreds of emoji characters. 

PLAY AGAINST A FRIEND OR AN ARTIFICIAL INTELLIGENCE BOT

You can have fun with a nearby friend and play multiple rounds! However, you can go solo against an AI with three different difficulty modes.

<h4>Keep track of scores</h4>

Playing best two out of three? Best 5 out of 7? Or have your own custom set of games? Keep track of winners of multiple games as you play multiple rounds of Tic Tac Toe.

<h4>Dark mode compatible</h4>

Playing at night or simply prefer the darker aesthetic? The app is dark mode compatible to supplement your most comfortable viewing experience.      
            </div>            
        </div>
    )
}

const CopyRightRow = (props) => <div className="copyrightRow">Copyright William A. Rodriguez Jimenez</div>

const EmojiTacToe = (props) =>{

    let photos = [AIselection,ChooseEmojis,DarkMode,DarkModeAI,HomeScreen,Unicorn]
    return(
        <div className="tictactoeContainer">
            <div className="flexRow appDescriptionRow">
                <AppIcon/>
                <div className="appTitle">Emoji Tic Tac Toe!</div>
            </div>
            <div className="flexRow">
                <Gallery photos={photos}/>
            </div>
            <AppDescription/>
            <CopyRightRow/>
        </div>
    )
}


export default EmojiTacToe;