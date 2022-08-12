// import React from 'react';
// import { CDBFooter, CDBBox, CDBFooterLink } from 'cdbreact';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../App.css'
import colores from './Style';

export default function Footer() {
  return (
  <nav id="footer">
    <div className="container">
      <div className="pull-left fnav">
        <p>ALL RIGHTS RESERVED. COPYRIGHT © 2022. Designed by Cintia Cariddi and Coded by Cintia Cariddi</p>
      </div>
      <div className="pull-right nav">
        <ul className="footer-social">
          <li><a href="#" className="d-flex align-items-center p-0 text-light" {...colores[50]}><GitHubIcon /></a></li>
          <li><a href="#" className="d-flex align-items-center p-0 text-light" {...colores[50]}><LinkedInIcon  /></a></li>
          <li><a href="#" className="d-flex align-items-center p-0 text-light" {...colores[50]}><EmailIcon  /></a></li>
        </ul>
      </div>
    </div>
  </nav>
)};