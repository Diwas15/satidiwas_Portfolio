import logo from './images/manas3.png';
import './App.css';
import site from './images/site.png';
import chat from './images/chat.png';
import AI_ML from './images/AI_ML.png';
import school from './images/school.png';
import call from './images/call.png';
import email from './images/email.png';
import degree from './images/degree.png';
import upKey from './images/up.png';
import holo from './images/holo.png';
import StackIcon from "tech-stack-icons";
import express from './images/express.png';
import kafka from './images/kafka.png';
import python from './images/python.png';
import jwtIcon from './images/jwtIcon.png';
import reactNative from './images/reactNative.png';
import React, {useEffect, useState} from 'react';


function App() {
  const [show, setShow] = useState(false);
  const [selectDesc, setSelectDesc] = useState('');
  const [showHam, setShowHam] = useState(true);

  const moveUp = ()=>{
    
    let about = document.getElementById('about').offsetTop;
    let projects = document.getElementById('projects').offsetTop;
    let education = document.getElementById('education').offsetTop;
    let contact = document.getElementById('contact').offsetTop;

    let curPos = window.scrollY;

    if(curPos>=about-1 && curPos<projects-1){
      window.scrollTo({top:0});
    }
    else if(curPos>=projects-1 && curPos<education-1){
      window.scrollTo({top:about});
    }
    else if(curPos>=education-1 && curPos<education+(contact-education)/2){
      window.scrollTo({top:projects});
    }
    else{
      window.scrollTo({top:education});
    }
    
  }

  const moveDown = ()=>{
    let about = document.getElementById('about').offsetTop;
    let projects = document.getElementById('projects').offsetTop;
    let education = document.getElementById('education').offsetTop;
    let contact = document.getElementById('contact').offsetTop;

    let curPos = window.scrollY;

    if(curPos>=about-1 && curPos<projects-1){
      window.scrollTo({top:projects});
    }
    else if(curPos>=projects-1 && curPos<education-1){
      window.scrollTo({top:education});
    }
    else if(curPos>=education-1 && curPos<education+(contact-education)/2){
      window.scrollTo({top:contact});
    }
    
  }

  document.addEventListener('scroll',()=>{
    if(window.scrollY >=document.getElementById('about').offsetTop-1 ){
      setShow(true);
    }
    else setShow(false);
  })

  return (
    <div className="App">
      <img className={!show?'hideArrows':'moveUp'} src={upKey} onClick={moveUp} alt="" />
      <img className={!show?'hideArrows':'moveDown'} src={upKey} onClick={moveDown} alt="" />

      <header className='header'>
        <div id="nav-icon4" className={showHam?'':'open'} onClick={()=>setShowHam(!showHam)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a className={showHam?`burgerHide`:``} href="#about">About</a>
        <a className={showHam?`burgerHide`:``}  href="#projects">Projects</a>
        <a className={showHam?`burgerHide`:``}  href="#education">Education</a>
        <a className={showHam?`burgerHide`:``}  href="#contact">Contact Me</a>
      </header>
      <div id="about" className="About">
        <div className="about_desc">
          <h1>Hey!</h1>
          <p>Myself <b>Diwas Sati</b>, a skilled <b>MERN</b> stack developer with over three years of experience in building robust and scalable web applications.
           I also have a strong foundation in problem-solving with C++, which complements my development work. Currently, I am expanding my expertise by working with Kafka for data streaming,
           Next.js for server-side rendering, and React Native for mobile application development.</p>
        </div>
        <div className="professional_image">
          <img src={logo} alt="" />
          <div className='light'><img height='100px' width='100px' src={holo} alt="" /></div>
        </div>
      </div>
      <div id="projects" className="projects">
        <p>Projects</p>
        <div className="card">
          <div className="card_head">
            <div className="company_logo">
              <img src={AI_ML} alt="" />
            </div>
            <div className="job_title">
              <h3 style={{color:''}}>Breast Cancer Detection App With CNN</h3>
              <p>Haldwani, Uttarakhand, India</p>
              <p style={{fontSize:'15px' ,color:'#777777'}}>Jan 2024 - August 2024</p>
            </div>
            <div className="project_desc">
            <h4 id="p1" onClick={()=>setSelectDesc((prev)=>{
              if(prev=='p1')  return '';
              return 'p1'
            })}>Description <div style={{display:'inline-block'}} className={selectDesc=='p1'?'turn_arrow':''}>&#10148;</div></h4>
              <div className={selectDesc!='p1'?`list`:`list list_show`}>
                <ul  >
                  <li> Used Transfer Learning in a 14-layered CNN architecture.</li>
                  <li> Optimized performance using regularization and tuning the learning rate.</li>
                  <li> Built a web app for better user interaction for use of the app in pathology labs.</li>
                  <li> Added report manager in the app with proper security.</li>
                </ul>
                <h4 >Tech Stack</h4>
                <div className='tech_stack'>
                  <StackIcon name="reactjs" className='tech'/>
                  <StackIcon name="python" className='tech'/>
                  <StackIcon name="nodejs" className='tech'/>
                  <StackIcon name="mongodb" className='tech'/>
                  <StackIcon name="django" className='tech'/>
                  <StackIcon name="git" className='tech'/>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 64 64" className='tech'>
<linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLa_2ZOaTclOqD4q_gr1" x1="30.982" x2="30.982" y1="21.203" y2="43.514" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLa_2ZOaTclOqD4q_gr1)" d="M45.758,32.346L56.964,47h-0.85c-1.051,0-2.041-0.49-2.68-1.324L44.5,33.992l-8.935,11.684	C34.927,46.51,33.937,47,32.886,47h-0.85l11.206-14.654L32.271,18h0.85c1.051,0,2.041,0.49,2.68,1.324l8.7,11.377l8.7-11.377	C53.838,18.49,54.829,18,55.879,18h0.85L45.758,32.346z M28.527,40h0.638c0,0,0,0,0,0c-2.348,6.085-9.292,9.631-15.896,7.256	C8.215,45.437,5,40.444,5,35.073L5,29.5c0-7.29,6.273-13.143,13.705-12.443C25.182,17.667,30,23.361,30,29.866L30,34H19v0H7l0,1.109	c0,4.501,2.671,8.705,6.9,10.248c4.807,1.754,9.835-0.235,12.389-4.116C26.789,40.481,27.616,40,28.527,40z M7,32h21v-2.5	C28,23.71,23.29,19,17.5,19S7,23.71,7,29.5V32z"></path><linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLb_2ZOaTclOqD4q_gr2" x1="44.5" x2="44.5" y1="16" y2="49" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLb_2ZOaTclOqD4q_gr2)" d="M56.729,18L45.758,32.347L56.964,47h-0.85	c-1.051,0-2.041-0.49-2.68-1.324L44.5,33.992l-8.935,11.684C34.927,46.51,33.937,47,32.886,47h-0.85l11.206-14.653L32.271,18h0.85	c1.051,0,2.041,0.49,2.68,1.324l8.7,11.377l8.7-11.377C53.838,18.49,54.829,18,55.879,18H56.729 M60.776,16h-4.047h-0.85	c-1.663,0-3.258,0.788-4.268,2.109L44.5,27.408l-7.111-9.299C36.379,16.788,34.783,16,33.121,16h-0.85h-4.047l2.458,3.215	l10.042,13.132L30.447,45.785L27.989,49h4.047h0.85c1.663,0,3.258-0.789,4.268-2.109l7.346-9.606l7.346,9.606	C52.856,48.211,54.451,49,56.114,49h0.85h4.047l-2.458-3.215L48.276,32.346l10.042-13.132L60.776,16L60.776,16z"></path><linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLc_2ZOaTclOqD4q_gr3" x1="17.54" x2="17.54" y1="15" y2="50" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLc_2ZOaTclOqD4q_gr3)" d="M17.5,17c0.397,0,0.8,0.019,1.205,0.057	C25.182,17.667,30,23.361,30,29.866V34H19v0H7v1.109c0,4.501,2.671,8.705,6.9,10.248C15.1,45.796,16.314,46,17.5,46	c3.563,0,6.872-1.847,8.789-4.758C26.789,40.481,27.616,40,28.527,40h0.638c0,0,0,0,0,0c-1.847,4.785-6.535,8-11.665,8	c-1.394,0-2.82-0.237-4.231-0.745C8.215,45.437,5,40.444,5,35.073V29.5C5,22.607,10.607,17,17.5,17 M7,32h21v-2.5	C28,23.71,23.29,19,17.5,19S7,23.71,7,29.5V32 M17.5,15L17.5,15c-3.868,0-7.508,1.509-10.249,4.251C4.51,21.992,3,25.632,3,29.5	v5.573c0,6.348,3.855,12,9.592,14.065C14.184,49.71,15.835,50,17.5,50c5.951,0,11.389-3.729,13.531-9.28l1.05-2.72l-2.915,0	l-0.638,0c-1.565,0-3.026,0.801-3.91,2.142C23.052,42.522,20.324,44,17.5,44c-0.986,0-1.967-0.175-2.915-0.521	C11.509,42.356,9.362,39.416,9.042,36H19l11,0l2,0v-2v-4.134c0-7.607-5.758-14.109-13.108-14.8C18.43,15.022,17.962,15,17.5,15	L17.5,15z M9,30v-0.5c0-4.687,3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5V30H9L9,30z"></path>
</svg>
                </div>
              </div>
              <button className='btn'>Source Code</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card_head">
            <div className="company_logo">
              <img src={chat} alt="" />
            </div>
            <div className="job_title">
              <h3 style={{color:''}}>One-on-One Chat Application</h3>
              <p>Haldwani, Uttarakhand, India</p>
              <p style={{fontSize:'15px' ,color:'#777777'}}>Feb 2023 - Apr 2023</p>
            </div>
            <div className="project_desc">
            <h4 id="p2" onClick={()=>setSelectDesc((prev)=>{
              if(prev=='p2')  return '';
              return 'p2'
            })}>Description <div style={{display:'inline-block'}} className={selectDesc=='p2'?'turn_arrow':''}>&#10148;</div></h4>
              <div className={selectDesc!='p2'?`list`:`list list_show`}>
                <ul  >
                  <li> Built an android chat app in React Native.</li>
                  <li> Private chat for each user(currently working on the group chat feature).</li>
                  <li> Trying to implement Kafka for more realtime chatting and prevent data loss.</li>
                  <li> Added functionality to send media as well.</li>
                </ul>
                <h4 >Tech Stack</h4>
                <div className='tech_stack'>
                  <img src={reactNative} alt="" className='tech'/>
                  <StackIcon name="js" className='tech'/>
                  <StackIcon name="nodejs" className='tech'/>
                  <StackIcon name="mongodb" className='tech'/>
                  <img src={kafka} alt="" className='tech'/>
                  <img src={express} alt="" className='tech'/>
                  <StackIcon name="git" className='tech'/> 
                </div>

              </div>
              <button className='btn'>Source Code</button>
            </div> 
          </div>  
        </div>
        <div className="card">
          <div className="card_head">
            <div className="company_logo">
              <img src={site} alt="" />
            </div>
            <div className="job_title">
              <h3 style={{color:''}}>Jal Sansthan Website ( pitched )</h3>
              <p>Haldwani, Uttarakhand, India</p>
              <p style={{fontSize:'15px' ,color:'#777777'}}>Aug 2024 - Nov 2024</p>
            </div>
            <div className="project_desc">
            <h4 id="p3" onClick={()=>setSelectDesc((prev)=>{
              if(prev=='p3')  return '';
              return 'p3';
            })}>Description <div style={{display:'inline-block'}} className={selectDesc=='p3'?'turn_arrow':''}>&#10148;</div></h4>
              <div className={selectDesc!='p3'?`list`:`list list_show`}>
                <ul  >
                  <li> Web app built in ReactJs.</li>
                  <li> The app shows various schemes of jal Nigam and Jal Sansthan Uttarakhand under Jal Jeevan Mission.</li>
                  <li> Grievance submission through mail.</li>
                  <li> Implemented authentication for scheme evaulation, adding new schemes and monitoring registered grievances' progress.</li>
                </ul>
                <h4 >Tech Stack</h4>
                <div className='tech_stack'>
                  <StackIcon name="reactjs" className='tech'/>
                  <img src={jwtIcon} alt="" className='tech'/>
                  <StackIcon name="nodejs" className='tech'/>
                  <StackIcon name="mongodb" className='tech'/>
                  <StackIcon name="git" className='tech'/>
                  <img src={express} alt="" className='tech'/>
                </div>

              </div>
              <button className='btn'>Source Code</button>
            </div>
            
          </div>
          
          
        </div>
      </div>




      <div id="education" className="projects">
        <p>Education</p>
        <div className="card">
          <div className="company_logo">
            <img src={degree} width="130px" height="130px" alt="" />
          </div>
          <div className="job_title">
            <h3>B.Tech in Information Technology</h3>
            <p>Manipal University Jaipur, Jaipur, Rajasthan, India</p>
            <p style={{fontSize:'15px' ,color:'#777777'}}>September 2020 - October 2024</p>
          </div>
        </div>
        <div className="card">
          <div className="company_logo">
            <img src={school} alt="" />
          </div>
          <div className="job_title">
            <h3>HSC</h3>
            <p>Aryaman Vikram Birla Institute of Learning, Haldwani, Uttarakhand, India</p>
            <p style={{fontSize:'15px' ,color:'#777777'}}>May 2019 - April 2020</p>
          </div>
        </div>
        <div className="card">
          <div className="company_logo">
            <img src={school}  alt="" />
          </div>
          <div className="job_title">
            <h3>SSC</h3>
            <p>Aryaman Vikram Birla Institute of Learning, Haldwani, Uttarakhand, India</p>
            <p style={{fontSize:'15px' ,color:'#777777'}}>May 2018 - April 2019</p>
          </div>
        </div>
      </div>

      <div id="contact" className="projects">
        <p>Contact Me</p>
        <div className="container">
          <div className="contact_card">
            <img style={{marginRight:'.5rem', height:'1.4rem'}} src={call} alt="" />
            <a href="tel:7088833530">7453072456</a>
          </div>
          <div className="contact_card">
            <img style={{marginRight:'.5rem', height:'1.6rem'}} src={email} alt="" />
            <a href="mailto:satimanas2001@gmail.com">satidiwas@gmail.com</a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
