// import React from 'react';
// import { CDBFooter, CDBBox, CDBFooterLink } from 'cdbreact';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../App.css'
import colores from './Style';

export default function Footer() {
  return (
//     <CDBFooter className="shadow" style={{ background:'#62727b'}}>
//         <CDBBox
//             display="flex"
//             justifyContent="between"
//             alignItems="center"
//             className="mx-auto py-4 flex-wrap"
//             style={{ width: '80%', height:'140px'}}
//         >
//           <CDBBox alignSelf="center">
//             <a href="#" className="d-flex align-items-center p-0 text-dark">
//               <span className="ml-4 h5 mb-0 font-weight-bold">Cintia Cariddi</span>
//             </a>
//             <CDBBox className="mt-4 espacio" display="flex" >
//               <div margin-top= '0'>
//                 <a href='https://github.com/CinCariddi' target='_blank'>
//                   <GitHubIcon  sx={{ color: '#263238' }} />
//                 </a>
//               </div>
//               <div>
//                 <a href='https://www.linkedin.com/in/cintiacariddi/' target='_blank'>
//                   <LinkedInIcon sx={{ color: '#263238' }}/>
//                 </a>
//               </div>
//               <div>
//                 <a href='mailto:cintiacariddi@gmail.com'>
//                   <EmailIcon sx={{ color: '#263238' }}/>
//                 </a>
//               </div>
//             </CDBBox>
//         </CDBBox>
//         <CDBBox display="flex" >
//           <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
//               <CDBFooterLink href="/">Proyectos</CDBFooterLink>
//               <CDBFooterLink href="/">Habilidades</CDBFooterLink>
//               <CDBFooterLink href="/">Estudios</CDBFooterLink>
//           </CDBBox>
//         </CDBBox>
//         </CDBBox>
//     </CDBFooter>


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