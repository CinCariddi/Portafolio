import React from 'react';
import { CDBFooter, CDBBox } from 'cdbreact';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <CDBFooter className="shadow" style={{ background:'#62727b'}}>
        <CDBBox
            display="flex"
            justifyContent="between"
            alignItems="center"
            className="mx-auto py-4 flex-wrap"
            style={{ width: '80%'}}
        >
        <CDBBox display="flex" alignItems="center">
          <a href="#" className="d-flex align-items-center p-0 text-dark">
            <span className="ml-4 h5 mb-0 font-weight-bold">Cintia Cariddi</span>
          </a>
          <small className="ml-2">&copy; 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex" justifyContent='space-evenly'>
          <div>
            <a href='https://github.com/CinCariddi' target='_blank'>
              <GitHubIcon  sx={{ color: '#263238' }} />
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/cintiacariddi/' target='_blank'>
              <LinkedInIcon sx={{ color: '#263238' }}/>
            </a>
          </div>
          <div>
            <EmailIcon sx={{ color: '#263238' }}/>
          </div>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};