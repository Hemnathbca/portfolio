import React from 'react';
import  ReactDOM  from 'react-dom/client';
import Logo from './images/logos.png';
import background from './images/bg.jpg';
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp,FaHouseDamage } from "react-icons/fa";
import './index.css';
import { MdEmail} from "react-icons/md";

const App = function(){
return(

  <div>

<div
        class="bg_image"
        style={{
          backgroundImage: 'url('+background+')',
          backgroundSize:'cover',
          Width:'100vh',
          height: "100vh",
          color: "#f5f5f5"
        }}
      >
  <div>
     <img src={Logo} alt="logo" width={75} height={75} ></img>
  </div>
  <div className='icon'>
   <span className='icons'><a href=''><MdEmail/></a></span>
   <span className='icons'><a href=''><FaWhatsapp/></a></span>
   <span className='icons'><a href=''><FaFacebook/></a></span>
   <span className='icons'><a href=''><FaInstagram/></a></span>
   <span className='icons'><a href=''><FaTwitter/></a></span>
   <span className='icons'><a href=''><FaGithub/></a></span>
   <span className='icons'><a href=''><FaLinkedin/></a></span>
  </div>
<div className='topic'>
  <h1>Hemnath</h1>
    <h2> Developer</h2>
</div>


</div>

  </div>

)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);