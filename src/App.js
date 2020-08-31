import React,{useState} from 'react';
import './App.css';


const Header = (props)=>{
  return(
    <>
    <div className="row header-title">
    William Rodriguez
  </div>
  <div className="row description">
    tech, energy, economics
  </div>  
  </>  
  )
}
const Education = (props)=>{
  return(
    <>
      <div className="row header-content">
        education🎓
      </div>
      <div className="row">
        MIT Class of 2019 (MEng, Computer Science and Engineering, Concentration in Artificial Intelligence)
        {<br/>}
        MIT Class of 2018 (SB, Computer Science and Engineering, Minor in Economics)
      </div>    
    </>
  )
}

const JobList = (props) =>{
  return(
    <>
    <div class="row header-content">
    professional experience👔
  </div>
    <ul>
    <li>
      <a href="https://www.apple.com">Apple</a> (Present - Cupertino, CA / remotely )
    </li>            
    <li>
      <a href="https://www.un.org">United Nations</a> (Fall '19 - New York City, NY 🇺🇳)
    </li>

    <li>
      <a href="https://www.tesla.com/energy">Tesla</a> (Summer '19 - Palo Alto, CA 🌉)
    </li>
    <li>
      <a href="iberdrola.com"> Iberdrola</a> (Summer '18 - Madrid, Spain 🇪🇸)
    </li>
    <li>
      MIT Global Teaching Labs in Entrepreneurship with<a href="https://www.babroad.com.br/copia-inicio"> B-Abroad</a> (Winter '18 - São Paulo, Brazil 🇧🇷)
    </li>
    <li>
      <a href="morganstanley.com">Morgan Stanley</a> (Summer '17 - New York City, NY 🗽)
    </li>
    <li>
      <a href="take.net">Take.NET</a> (Summer '16 - Belo Horizonte, Brazil 🇧🇷)
    </li>
    <li>
      <a href="https://tala.co">Tala</a> (Winter '16 - Santa Monica, CA 🎢)
    </li>
  </ul>  
  </>  
  )
}

const ProjectsResearch = (props)=>{
  return(
    <>
    <div class="row header-content">
    projects & research🔭
  </div>
  <ul>
    <li>
      <a href="https://covidtrackerpr.com">COVID-19 in Puerto Rico</a> React Web+iOS+Android app with Firebase backend for showing statistics of spread of COVID-19 in Puerto Rico 🦠
    </li>
    <li>
      <a href="https://github.com/dkout/power_to_the_blind">Power to the Blind:</a> Raspberry Pi-enabled hat that identifies people in camera range and reads location through earphones 🧢
    </li>
    <li>
    <a href="docs/Abstract_Please_email_for_full_copy.pdf">
    Master's Thesis: Understanding EV Owners’ Preferences Towards Enrolling in Smart Charging Programs🚗⚡️</a>
    </li>
    <li>
    <a href="docs/Classification_of_Alzheimers_Disease Presence_Using_Brain_MRIs.pdf">
    Final Project for 6.869 Computer Vision: Classification of Alzheimers Disease Presence Using Brain MRIs 🧠</a>
    </li>
  <li>
    <a href="https://www.youtube.com/watch?v=RpgbJAM_37U">
      iNotify: iOS app to assist people with aphasia-like episodes to quickly communicate📱🆘
    </a>
  </li>
  <li>
    Advanced Undergraduate Research Assistant at &nbsp;<a href="https://superurop.mit.edu/scholars/william-alfonso-rodriguez/">MIT Laboratory for Informations and Decision Systems 👨‍🔬</a>
  </li>
  <li>
    Undergraduate Research Assistant at &nbsp;<a href="https://affect.media.mit.edu">Affective Computing, MIT Media Lab</a> - <a href="https://scholar.harvard.edu/daniel_lopezmartinez/mit-happy-robot"> NAO Happy Robot 🤖</a>
  </li>
  <li>Final Paper for 14.05 Intermediate Applied Macroeconomics: <a href="docs/Brazil_and_Venezuela.pdf">Brazil and Venezuela: Long-run effects of TFP-enhancing early industrialization and interventionist government policy</a> 🏭</li>
</ul>
</>   
  )
}

const ProgrammingSkills = (props) =>{
  return (
    <>
<div className="row header-content">
        programming skills
      </div>
      <div className="row">
        <ul>
          <li>Python 🐍</li>
          <li>React Native ☢️</li>
          <li>React Js☢️</li>
          <li>HTML/CSS/JS 🕸</li>
          <li>Java ☕️</li>
          <li>iOS Swift🍏</li>
          <li>R 📈</li>
          <li>SQL 🛢</li>


        </ul>
      </div>
      </>    
  )
}

const Languages = (props)=>{
  return(
    <>
<div class="row header-content">
          languages🌍
        </div>
        <div class="row">
          <ul>
            <li>English🇺🇸(Native)</li>
            <li>Spanish🇵🇷(Native)</li>
            <li>Portuguese🇧🇷(Fluent, took courses at MIT + lived in Brazil 4 months)</li>
            <li>French🇫🇷(Intermediate, 5yrs in high school + 1 in college)</li>
            <li>Japanese🇯🇵(Can read and introduce myself, took Japanese I)</li>
          </ul>
        </div>
        </>  
  )
}

const GetInTouch = (props)=>{
  return(
  <>
    <div class="row header-content">
    get in touch🏄‍
    </div>
  <div className="row bottom-row">
    <div className="row contact-icons-row">
      <a href="https://instagram.com/williamrodz">
        <img className="icon-image" src="img/iconmonstr-instagram-11-24.png" alt="instagram logo"/>
      </a>

      <a href="https://github.com/williamrodz">
        <img className="icon-image" src="img/iconmonstr-github-1-24.png" alt="github logo"/>
      </a>

      <a href="https://linkedin.com/in/williamarodriguez">
        <img className="icon-image" src="img/iconmonstr-linkedin-3-24.png" alt="linkedin logo"/>
      </a>
      <a data-toggle="modal" style={{cursor:'pointer'}}onClick={()=>alert("william *dot* a *at* alum *dot* mit *dot* edu")}>
        <img className="icon-image" src="img/iconmonstr-email-11-24.png" alt="email icon"/>
      </a>
    </div>
  </div>
  </>  
  )
}

const Modal = (props)=>{
  return(
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        {/*Modal Content*/}
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">email me ✉️</h4>
          </div>
          <div class="modal-body">
            <p>william *dot* a *at* alum *dot* mit *dot* edu</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>

      </div>
    </div>    
  )
}



function App() {
  const [modalVisible,setModalVisibility] = useState(false)
  const enableModal = () => (setModalVisibility(true))
  const disableModal = () => (setModalVisibility(false))


  return (
    <>
    <canvas></canvas>
    <div className="wrapper">
      <Header/>
      <Education/>
      <JobList/>
      <ProjectsResearch/>
      <ProgrammingSkills/>
      <Languages/>
      <GetInTouch enableModal={enableModal} disableModal={disableModal}/>
      {modalVisible ? <Modal/> : <div/>}
    </div>
    </>
       
  );
}

export default App;
