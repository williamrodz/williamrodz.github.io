import React,{useState} from 'react';
import './App.css';



const Header = (props)=>{
  return(
    <>
    <div className="row header-title colorchanging-item">
    William Rodriguez
  </div>
  <div className="row description">
    I am passionate about technology that improves people's lives, accelerating the transition to clean energy, and learning about how the world works.
  </div>  
  </>  
  )
}

const JobList = (props) =>{
    return(
    <ul style={{listStyleType: 'none'}}>
    <li>
      <a href="https://www.apple.com">Apple</a> (Present - Cupertino, CA / remotely )
    </li>            
    <li>
      <a href="https://www.un.org">United Nations</a> (Fall '19 - New York City, NY <span role="img" aria-label="UN logo">🇺🇳</span>)
    </li>

    <li>
      <a href="https://www.tesla.com/energy">Tesla</a> (Summer '19 - Palo Alto, CA <span role="img" aria-label="san fancisco bridge">🌉</span>)
    </li>
    <li>
      <a href="iberdrola.com"> Iberdrola</a> (Summer '18 - Madrid, Spain <span role="img" aria-label="Spanish flag">🇪🇸</span>)
    </li>
    <li>
      MIT Global Teaching Labs in Entrepreneurship with<a href="https://www.babroad.com.br/copia-inicio"> B-Abroad</a> (Winter '18 - São Paulo, Brazil <span role="img" aria-label="Brazilian flag">🇧🇷</span>)
    </li>
    <li>
      <a href="morganstanley.com">Morgan Stanley</a> (Summer '17 - New York City, NY <span role="img" aria-label="Statue of Liberty">🗽</span>)
    </li>
    <li>
      <a href="take.net">Take.NET</a> (Summer '16 - Belo Horizonte, Brazil <span role="img" aria-label="Brazilian flag">🇧🇷</span>)
    </li>
    <li>
      <a href="https://tala.co">Tala</a> (Winter '16 - Santa Monica, CA <span role="img" aria-label="Rollercoaster">🎢</span>)
    </li>
  </ul>)}

const ProjectsResearch = () =>
 (<ul style={{listStyleType: 'none'}}>

    <li>
      <a href="https://covidtrackerpr.com">COVID-19 in Puerto Rico</a> React Web+iOS+Android app with Firebase backend for showing statistics of spread of COVID-19 in Puerto Rico <span role="img" aria-label="Virus">🦠</span>
    </li>
    <li>
      <a href="https://github.com/dkout/power_to_the_blind">Power to the Blind:</a> Raspberry Pi-enabled hat that identifies people in camera range and reads location through earphones <span role="img" aria-label="Blue hat">🧢</span>
    </li>
    <li>
    <a href="docs/Abstract_Please_email_for_full_copy.pdf">
    Master's Thesis: Understanding EV Owners’ Preferences Towards Enrolling in Smart Charging Programs<span role="img" aria-label="Electric car">🚗⚡️</span></a>
    </li>
    <li>
    <a href="docs/Classification_of_Alzheimers_Disease Presence_Using_Brain_MRIs.pdf">
    Final Project for 6.869 Computer Vision: Classification of Alzheimers Disease Presence Using Brain MRIs <span role="img" aria-label="Brain">🧠</span></a>
    </li>
  <li>
    <a href="https://www.youtube.com/watch?v=RpgbJAM_37U">
      iNotify: iOS app to assist people with aphasia-like episodes to quickly communicate<span role="img" aria-label="iPhone with SOS">📱🆘</span>
    </a>
  </li>
  <li>
    Advanced Undergraduate Research Assistant at &nbsp;<a href="https://superurop.mit.edu/scholars/william-alfonso-rodriguez/">MIT Laboratory for Informations and Decision Systems <span role="img" aria-label="Scientist">👨‍🔬</span></a>
  </li>
  <li>
    Undergraduate Research Assistant at &nbsp;<a href="https://affect.media.mit.edu">Affective Computing, MIT Media Lab</a> - <a href="https://scholar.harvard.edu/daniel_lopezmartinez/mit-happy-robot"> NAO Happy Robot <span role="img" aria-label="Robot">🤖</span></a>
  </li>
  <li>Final Paper for 14.05 Intermediate Applied Macroeconomics: <a href="docs/Brazil_and_Venezuela.pdf">Brazil and Venezuela: Long-run effects of TFP-enhancing early industrialization and interventionist government policy</a> <span role="img" aria-label="Factory">🏭</span></li>
</ul>)

const ProgrammingSkills = () =>(
   <div className="row">
        <ul style={{listStyleType: 'none'}}>
          <li>Python <span role="img" aria-label="Snake">🐍</span></li>
          <li>React Native <span role="img" aria-label="Radioactive">☢️</span></li>
          <li>React Js<span role="img" aria-label="Radioactive">☢️</span></li>
          <li>HTML/CSS/JS <span role="img" aria-label="Spiderweb">🕸</span></li>
          <li>Java <span role="img" aria-label="Coffee">☕️</span></li>
          <li>iOS Swift<span role="img" aria-label="Apple">🍏</span></li>
          <li>R <span role="img" aria-label="Increasing chart">📈</span></li>
          <li>SQL <span role="img" aria-label="Barrel">🛢</span></li>
        </ul>
      </div>)

const Languages = ()=>
  (<div class="row">
          <ul style={{listStyleType: 'none'}}>
            <li>English<span role="img" aria-label="US Flag">🇺🇸</span>(Native)</li>
            <li>Spanish<span role="img" aria-label="Puerto Rican Flag">🇵🇷</span>(Native)</li>
<li>Portuguese<span role="img" aria-label="Brazilian Flag">🇧🇷</span>{<br/>}(Fluent, took courses at MIT + lived in Brazil 4 months)</li>
            <li>French<span role="img" aria-label="French Flag">🇫🇷</span>{<br/>}(Intermediate, 5yrs in high school + 1 in college)</li>
            <li>Japanese<span role="img" aria-label="Japanese Flag">🇯🇵</span>{<br/>}(Can read and introduce myself, took Japanese I)</li>
          </ul>
        </div>
  )

const SocialMedia = (props)=>(
  <div style={{...props.style}}>
      <a href="https://instagram.com/williamrodz">
        <img className="icon-image" src="img/iconmonstr-instagram-11-24.png" alt="instagram logo"/>
      </a>

      <a href="https://github.com/williamrodz">
        <img className="icon-image" src="img/iconmonstr-github-1-24.png" alt="github logo"/>
      </a>

      <a href="https://linkedin.com/in/williamarodriguez">
        <img className="icon-image" src="img/iconmonstr-linkedin-3-24.png" alt="linkedin logo"/>
      </a>
    </div>
  )

  const Email = (props) =>{
    return(
      <div>william *dot* a *at* alum *dot* mit *dot* edu</div>
    )
  }


function App() {
  const [selectedSection,setSelectedSection] = useState(null)


  const SiteSection = (props)=>{
    return(
    <div className={selectedSection === props.sectionName ? 'appearing-item' : ''} style={{cursor:'pointer',flexDirection:'column',textAlign:'center'}}>
      <div className="row header-content" onClick={()=>{
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
        <div className={props.sectionName === selectedSection ? 'row' : 'disappearing-item'}>
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
      <SocialMedia style={{display:'flex',bottom:10,alignContent:'center',width:'fit-content',position:'relative',top:10}}/>
        
    </div>
    </>
       
  );
}

export default App;
