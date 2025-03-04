import React from 'react';
import { Container } from 'react-bootstrap';
import { BsGithub, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <Container className='d-flex flex-row w-50 justify-content-between align-items-center'>
        <div className='text-left flex-column'>
          <p className='font-jua m-0'>BlueNyang</p>
          <p className='font-jua m-0'>e-Mail:</p>
          <div className='d-flex flex-column text-left mx-3'>
            <p className='font-jua m-0'>xpsj20@mail.bluenyang.kr</p>
            <p className='font-jua m-0'>xpsj20@gmail.com</p>
          </div>
        </div>
        <div className='links d-flex justify-content-center align-items-center'>
          <a
            href='https://github.com/BlueNyang'
            className='d-flex mx-2 border-1 border-emphasis rounded-circle square justify-content-center align-items-center'
            target='_blank'
            rel='noreferrer'
          >
            <BsGithub className='footerIcons' size='1.2rem' />
          </a>
          <a
            href='https://www.instragram.com/bluenyang2251'
            className='d-flex mx-2 border-1 border-emphasis rounded-circle square justify-content-center align-items-center'
            target='_blank'
            rel='noreferrer'
          >
            <BsInstagram className='footerIcons' size='1rem' />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
