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



const Header = (props)=>{
  return(
    <div className="header-container fade-in-item-first">
      <div className="header-title colorchanging-item">
      <div>William A. </div>
      <div>Rodríguez</div>
    </div>
    <div className="description">
      I am passionate about improving people's lives through tech and other means, accelerating the transition to clean energy, and learning about the world and its people.
    </div>  
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
   <div className="programming-skills-content">
        <div>
          <div className="list-item">Python <span role="img" aria-label="Snake">🐍</span></div>
          <div className="list-item">React Native <span role="img" aria-label="Radioactive">☢️</span></div>
          <div className="list-item">React Js<span role="img" aria-label="Radioactive">☢️</span></div>
          <div className="list-item">HTML/CSS/JS <span role="img" aria-label="Spiderweb">🕸</span></div>
          <div className="list-item">Java <span role="img" aria-label="Coffee">☕️</span></div>
          <div className="list-item">iOS Swift<span role="img" aria-label="Apple">🍏</span></div>
          <div className="list-item">R <span role="img" aria-label="Increasing chart">📈</span></div>
          <div className="list-item">SQL <span role="img" aria-label="Barrel">🛢</span></div>
        </div>
      </div>)

const Languages = ()=>
  (<div class="">
          <div style={{listStyleType: 'none'}}>
            <div className="list-item">English<span role="img" aria-label="US Flag">🇺🇸</span>(Native)</div>
            <div className="list-item">Spanish<span role="img" aria-label="Puerto Rican Flag">🇵🇷</span>(Native)</div>
<div className="list-item">Portuguese<span role="img" aria-label="Brazilian Flag">🇧🇷</span>{<br/>}(Fluent, took courses at MIT + lived in Brazil 4 months)</div>
            <div className="list-item">French<span role="img" aria-label="French Flag">🇫🇷</span>{<br/>}(Intermediate, 5yrs in high school + 1 in college)</div>
            <div className="list-item">Japanese<span role="img" aria-label="Japanese Flag">🇯🇵</span>{<br/>}Took first year Japanese </div>
          </div>
        </div>
  )

const SocialMedia = (props)=>(
  <div className="social-media-bar">
      <a href="https://instagram.com/williamrodz">
        <img className="icon-image" src="img/iconmonstr-instagram-11-24.png" alt="instagram logo"/>
      </a>
      <a href="https://linkedin.com/in/williamarodriguez">
        <img className="icon-image" src="img/iconmonstr-linkedin-3-24.png" alt="linkedin logo"/>
      </a>
      <a href="https://github.com/williamrodz">
        <img className="icon-image" src="img/iconmonstr-github-1-24.png" alt="github logo"/>
      </a>      
    </div>
  )

  const Email = (props) =>{
    return(
      <div>william *dot* a @ alum *dot* mit *dot* edu</div>
    )
  }


function App() {
  ReactGA.initialize('UA-110490349-2');
  ReactGA.pageview(window.location.pathname + window.location.search);
  
  const [selectedSection,setSelectedSection] = useState(null)


  const SiteSection = (props)=>{
    return(
    <div className={selectedSection === props.sectionName ? 'profile-section-header appearing-item' : 'profile-section-header'} >
      <div className="section-title" onClick={()=>{
        if (selectedSection === props.sectionName){
          setSelectedSection(null)
          console.log("deactivating section") 
        } else{
          setSelectedSection(props.sectionName) 
          console.log("activating section")       
      }}}>
        {props.title}
      </div>
      {props.sectionName === selectedSection ?
        <div className={props.sectionName === selectedSection ? '' : 'disappearing-item'}>
          {props.content}
        </div> :<div></div>}       
    </div> 
    )
  }  

  return (
    <>
    <canvas></canvas>
    <div className="wrapper">
      <Header />
      <div className="fade-in-item-second">
        <SiteSection 
          title={<>education<span role="img" aria-label="Grad cap">🎓</span></>}
          sectionName={'education'} 
          content={<>
            MIT Class of 2019 (MEng, Computer Science and Engineering, Concentration in Artificial Intelligence)
            {<br/>}
            MIT Class of 2018 (SB, Computer Science and Engineering, Minor in Economics)</>}      
        />
        <SiteSection 
        title={<>professional experience<span role="img" aria-label="tie emoji">👔</span></>}
        sectionName={'experience'}
        content={<JobList/>}/>
        <SiteSection 
          title={<>projects & research<span role="img" aria-label="Telescope">🔭</span></>}
          sectionName={'projects'}
          content={<ProjectsResearch/>}/>
        <SiteSection 
          title={<>programming skills<span role="img" aria-label="Coder">👨🏻‍💻</span></>}
          sectionName={'programming'}
          content={<ProgrammingSkills/>}/>
        <SiteSection 
        title={<>languages<span role="img" aria-label="Globe">🌍</span></>}
        sectionName={'languages'}
        content={<Languages/>}/>
        <SiteSection 
          title={<>get in touch<span role="img" aria-label="Surfer">🏄‍♀️</span></>}
          sectionName={'getintouch'}
          content={<Email/>}/>
        <SocialMedia />
      </div>
    </div>
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