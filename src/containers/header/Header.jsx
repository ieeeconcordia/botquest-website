import React from 'react';
import './header.css';
import { Register } from '../../components';

const Header = () => {
  return (
    <div className='header_container'>
      <h3 className='header_surtitle'>Ieee Concordia invites you to</h3>
      <h1 className='header_title'>WARHACKS</h1>
      <h3 className='header_surtitle'>On Feburary 11th, 2022</h3>
      <h3 className='header_subtitle'>AKA where you learn how to build robots</h3>
      <Register 
        text='Register Now!'
        background='#63BAFF'
        margin= '50px 0'
      />
    </div>
  )
}

export default Header