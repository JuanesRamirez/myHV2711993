import React from 'react'
import "./header.css"
import fotopersonal from "./fotopersonal.jpg"
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';



export default function Header() {
  return (
    <div className='header'>
        <div className="headerPhoto">
          <img src={fotopersonal} alt="foto-personal" className={"headerPhotoImg"}/>
        </div>
        <div className="headerNombres">
          <h1>JUAN ESTEBAN RAMIREZ JIMENEZ</h1>
          <p>Tecnologo en analisis y desarollo de software</p>
          <p>Egresado del colegio</p>
        </div>
        <div className="headerContacto">
          <ul className='contactList'>
              <li className='contactListItem'><p><SmartphoneIcon/></p>    <p>(+57) 3137440048</p></li>           
              <li className='contactListItem'><p><LocationOnIcon/></p>    <p>Dosquebradas / Risaralda - Colombia</p></li>
              <li className='contactListItem'><p><EmailIcon/></p> <p>estebanjuan421@gmail.com</p></li>  
              <li className='contactListItem'><p><AlternateEmailIcon/></p> <p>jorge.loaiza@utp.edu.co</p></li>            
          </ul>
        </div>       
    </div>
  )
}
