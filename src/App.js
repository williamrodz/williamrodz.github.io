import React,{useState} from 'react';
import ReactGA from 'react-ga';
import TicTacToe from './EmojiTicTacToe';
import TicTacToePrivacy from './AppPrivacyPolicy';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './css/home.css';
import { Icon } from '@iconify/react';

let SECTION_NAME_EDUCATION = "SECTION_NAME_EDUCATION"
let SECTION_NAME_JOBS = "SECTION_NAME_JOBS"

let SECTION_NAME_PROJECTS = "SECTION_NAME_PROJECTS"
let SECTION_NAME_PROGRAMMING = "SECTION_NAME_PROGRAMMING"
let SECTION_NAME_LANGUAGES = "SECTION_NAME_LANGUAGES"
let SECTION_NAME_GET_IN_TOUCH = "SECTION_NAME_GET_IN_TOUCH"

const Header = (props)=>{
  return(
    <div className="header-container fade-in-item-first">
      <div className="header-title colorchanging-item">
      <div>William A. </div>
      <div>Rodríguez Jiménez</div>
    </div>
    <div className="description">
      I enjoy improving people's lives through science and technology. I am excited about clean energy and learning about the world.
    </div>  
  </div>  
  )
}


const SectionSelector = (props) =>{
  let options = [
    ["🎓",SECTION_NAME_EDUCATION],
    ["👔",SECTION_NAME_JOBS],
  ["🔭",SECTION_NAME_PROJECTS],
  ["👨🏻‍💻",SECTION_NAME_PROGRAMMING],
  ["🌏",SECTION_NAME_LANGUAGES],
  ["✉️",SECTION_NAME_GET_IN_TOUCH]
  ]
  var optionObjects = []
  options.forEach(option=>{
    optionObjects.push(createOptionObject(option[0],option[1])) 
  })

  var menuOptions = []
  optionObjects.forEach(optionObject=>{
    menuOptions.push(<MenuOption onChangeSection={props.sectionChangeCallback} key={optionObject.sectionName} sectionName={optionObject.sectionName} displayText={optionObject.displayText}/>)
  })


  return(
    <div className='section-selector'>
      {
        menuOptions
      }

    </div>
  )
}

const JobList = (props) =>{
    return(
    <div className="job-list">
    <div className="list-item">
      <a href="https://www.apple.com">Apple</a> (Present - Cupertino, CA / remotely )
    </div>            
    <div className="list-item">
      <a href="https://www.un.org">United Nations</a> (Fall '19 - New York City, NY <span role="img" aria-label="UN logo">🇺🇳</span>)
    </div>

    <div className="list-item">
      <a href="https://www.tesla.com/energy">Tesla</a> (Summer '19 - Palo Alto, CA <span role="img" aria-label="san fancisco bridge">🌉</span>)
    </div>
    <div className="list-item">
      <a href="https://iberdrola.com"> Iberdrola</a> (Summer '18 - Madrid, Spain <span role="img" aria-label="Spanish flag">🇪🇸</span>)
    </div>
    <div className="list-item">
      MIT Global Teaching Labs in Entrepreneurship with<a href="https://www.babroad.com.br/copia-inicio"> B-Abroad</a> (Winter '18 - São Paulo, Brazil <span role="img" aria-label="Brazilian flag">🇧🇷</span>)
    </div>
    <div className="list-item">
      <a href="https://morganstanley.com">Morgan Stanley</a> (Summer '17 - New York City, NY <span role="img" aria-label="Statue of Liberty">🗽</span>)
    </div>
    <div className="list-item">
      <a href="https://take.net">Take.NET</a> (Summer '16 - Belo Horizonte, Brazil <span role="img" aria-label="Brazilian flag">🇧🇷</span>)
    </div>
    <div className="list-item">
      <a href="https://tala.co">Tala</a> (Winter '16 - Santa Monica, CA <span role="img" aria-label="Rollercoaster">🎢</span>)
    </div>
  </div>)}

const ProjectsResearch = () =>
 (<div className="projects-and-research" >
    <div className="list-item">
      <a href="https://prcovidideathon.com">Puerto COVID Ideathon</a> Organized a three-day ideathon with $3,500 in prizes for ideas to Puerto Rico beat COVID-19<span role="img" aria-label="Virus">🇵🇷</span>
    </div>
    <div className="list-item">
      <a href="https://www.youtube.com/watch?v=Nwx3VWVyN3Q">Speaker at European Energy Evaluation Conference</a> Presented peer-reviewed research paper on perceptions towards smart charging enrollment for electric vehicle owners<span role="img" aria-label="Virus">🇪🇺</span>
    </div>
    <div className="list-item">
      <a href="https://covidtrackerpr.com">COVID-19 in Puerto Rico</a> React Web+iOS+Android app with Firebase backend for showing statistics of spread of COVID-19 in Puerto Rico <span role="img" aria-label="Virus">🦠</span>
    </div>
    <div className="list-item">
      <a href="https://apps.apple.com/us/app/emoji-tic-tac-toe/id1558300785">Emoji Tic Tac Toe!</a> Published a classic game on the Apple App Store <span role="img" aria-label="Blue hat">📱</span>
    </div>    
    <div className="list-item">
      <a href="https://github.com/dkout/power_to_the_blind">Power to the Blind:</a> Raspberry Pi-enabled hat that identifies people in camera range and reads location through earphones <span role="img" aria-label="Blue hat">🧢</span>
    </div>
    <div className="list-item">
    <a href="docs/eee2020-paper-rodriguezjimenez-william-8-10-rodriguez-jimenez-william.pdf">
    Master's Thesis: Understanding EV Owners’ Preferences Towards Enrolling in Smart Charging Programs<span role="img" aria-label="Electric car">🚗⚡️</span></a>
    </div>
    <div className="list-item">
    <a href="docs/Classification_of_Alzheimers_Disease Presence_Using_Brain_MRIs.pdf">
    Final Project for 6.869 Computer Vision: Classification of Alzheimers Disease Presence Using Brain MRIs <span role="img" aria-label="Brain">🧠</span></a>
    </div>
  <div className="list-item">
    <a href="https://www.youtube.com/watch?v=RpgbJAM_37U">
      iNotify: iOS app to assist people with aphasia-like episodes to quickly communicate<span role="img" aria-label="iPhone with SOS">📱🆘</span>
    </a>
  </div>
  <div className="list-item">
    Advanced Undergraduate Research Assistant at &nbsp;<a href="https://superurop.mit.edu/scholars/william-alfonso-rodriguez/">MIT Laboratory for Informations and Decision Systems <span role="img" aria-label="Scientist">👨‍🔬</span></a>
  </div>
  <div className="list-item">
    Undergraduate Research Assistant at &nbsp;<a href="https://affect.media.mit.edu">Affective Computing, MIT Media Lab</a> - <a href="https://scholar.harvard.edu/daniel_lopezmartinez/mit-happy-robot"> NAO Happy Robot <span role="img" aria-label="Robot">🤖</span></a>
  </div>
  <div className="list-item">Final Paper for 14.05 Intermediate Applied Macroeconomics: <a href="docs/Brazil_and_Venezuela.pdf">Brazil and Venezuela: Long-run effects of TFP-enhancing early industrialization and interventionist government policy</a> <span role="img" aria-label="Factory">🏭</span></div>
</div>)

const ProgrammingSkills = () =>(
   <div className="section-coding">
          <div className="list-item programming-language">Python <span role="img" aria-label="Snake">🐍</span></div>
          <div className="list-item programming-language">React Native <span role="img" aria-label="Radioactive">☢️</span></div>
          <div className="list-item programming-language">React Js<span role="img" aria-label="Radioactive">☢️</span></div>
          <div className="list-item programming-language">HTML/CSS/JS <span role="img" aria-label="Spiderweb">🕸</span></div>
          <div className="list-item programming-language">Java <span role="img" aria-label="Coffee">☕️</span></div>
          <div className="list-item programming-language">iOS Swift<span role="img" aria-label="Apple">🍏</span></div>
          <div className="list-item programming-language">R <span role="img" aria-label="Increasing chart">📈</span></div>
          <div className="list-item programming-language">SQL <span role="img" aria-label="Barrel">🛢</span></div>
      </div>)

const GetInTouch = () =>{
  return (
    <div id="get-in-touch" className='get-in-touch-page'>
        <div className='get-in-touch-header'>Get in touch <span role="img" aria-label="person ridingsurfboard"> 🏄🏻‍♂️</span></div>
        <SocialMedia />
        <Email/>  
    </div>
  )
}

const Languages = ()=>
  (<div className='section-languages' style={{listStyleType: 'none'}}>
            <div className="list-item language-item"><strong>English</strong><span role="img" aria-label="US Flag">🇺🇸</span>(Native)</div>
            <div className="list-item language-item"><strong>Spanish</strong><span role="img" aria-label="Puerto Rican Flag">🇵🇷</span>(Native)</div>
            <div className="list-item language-item"><strong>Portuguese</strong><span role="img" aria-label="Brazilian Flag">🇧🇷</span>{<br/>}(Fluent, took courses at MIT + lived in Brazil 4 months)</div>
            <div className="list-item language-item"><strong>French</strong><span role="img" aria-label="French Flag">🇫🇷</span>{<br/>}(Intermediate, 5yrs in high school + 1 in college)</div>
            <div className="list-item language-item"><strong>Japanese</strong><span role="img" aria-label="Japanese Flag">🇯🇵</span>{<br/>}Took first year Japanese </div>
    </div>
  )

let SOCIAL_MEDIA_ICON_SIZE = 100


const SocialMediaIcon = (props) => {

  const [color,setColor] = useState('white')
  return (
    <a className="social-media-icon" onMouseOver={()=>setColor(props.hoverColor ? props.hoverColor :'orange')} onMouseLeave={()=>setColor('white')} href={props.href}>
    <Icon icon={props.icon} color={color} width={SOCIAL_MEDIA_ICON_SIZE} />
  </a>    
  )
}

const BigArrowDown = (props) =>{
  return(
    <div style={{fontSize:'20vw'}}>
      <span role="img" aria-label='arrow facing down'>⬇️</span>
    </div>
  )
}

const SocialMedia = (props)=>(
  <div className="social-media-bar">
      <SocialMediaIcon icon="akar-icons:instagram-fill" href="https://instagram.com/williamrodz" hoverColor="#e67e22" />
      <SocialMediaIcon icon="akar-icons:linkedin-fill" href="https://linkedin.com/in/williamarodriguez" hoverColor="rgb(10, 102, 194)"/>
      <SocialMediaIcon icon="akar-icons:github-fill" href="https://github.com/williamrodz" hoverColor="rgb(104,18,111)"/>
  </div>
  )

  const Email = (props) =>{
    return(
      <div className='email-text'>william.a @ alum.mit.edu</div>
    )
  }

  function createOptionObject(displayText,sectionName){
    return {displayText:displayText,sectionName:sectionName}
  }


  const MenuOption = (props) =>{

    if (props.sectionName === SECTION_NAME_GET_IN_TOUCH){
      return (
        <a className='section-icon' href="#get-in-touch" onMouseUp={() => props.onChangeSection(SECTION_NAME_GET_IN_TOUCH)}>
          {props.displayText}
        </a>
      )
      
    }

    else {
      return (
        <div className='section-icon' onClick={()=>props.onChangeSection(props.sectionName)}>
          {props.displayText}
        </div>
      )
    }

  }

function App() {
  ReactGA.initialize('UA-110490349-2');
  ReactGA.pageview(window.location.pathname + window.location.search);
  
  const [selectedSection,setSelectedSection] = useState(null)


  const EducationSection = () =>{
    return (
      <div className='section-education'>
        <strong>MIT Master of Engineering '19</strong>{<br/>}
        Computer Science and Engineering, Concentration in Artificial Intelligence{<br/>}{<br/>}
        <strong>MIT Bachelor of Science '18</strong>{<br/>}
        Computer Science and Engineering, Minor in Economics
        </div>      
    )
  }

  let sectionNamesToContent = {
      null:<></>,
    [SECTION_NAME_EDUCATION]:<EducationSection/>,
    [SECTION_NAME_JOBS]:<JobList/>,
    [SECTION_NAME_PROGRAMMING]:<ProgrammingSkills/>,
    [SECTION_NAME_PROJECTS]:<ProjectsResearch/>,
    [SECTION_NAME_LANGUAGES]:<Languages/>,
    [SECTION_NAME_GET_IN_TOUCH]:<BigArrowDown/>
  }



  return (
    <>
    <canvas></canvas>
    <div className="wrapper">
      <Header />
      <div className="fade-in-item-second">
        <SectionSelector sectionChangeCallback={setSelectedSection}/>
        {
          sectionNamesToContent[selectedSection]
        }
      </div>
    </div>
    <GetInTouch/>

    </>
       
  );
}



const AppWithRouter = (props) =>{
  return (
    <Router>
        <Switch>
          <Route path="/tictactoeprivacy">
            <TicTacToePrivacy />
          </Route>          
          <Route path="/tictactoe">
            <TicTacToe />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>

    </Router>
  )

}


export default AppWithRouter;