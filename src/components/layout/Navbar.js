import React from 'react'
import { Link } from 'react-router-dom'
import tweeter from '../../img/tweeter.png'
import discord from '../../img/discord.png'
import logo from '../../img/logo.png'

const Navbar = () => {
  return (
    <div className='top-navbar'>
      <div className='bg-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-right py-1'>
              <img alt='SETIMAGE' src={tweeter} className='img-fluid mx-2' />
              <img alt='SETIMAGE' src={discord} className='img-fluid mx-2' />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-nav p-1'>
        <div className='container'>
          <div className='d-flex align-items-center justify-content-between py-1'>
            <div>
              <img alt='SETIMAGE' src={logo} className='img-fluid' />
            </div>
            <div>
              <Link to='/' className='mx-2'>Home</Link>
              <Link to='/' className='mx-2'>Beehive</Link>
              <Link to='/' className='mx-2'>Honey Jar</Link>
              <Link to='/' className='mx-2'>Metamorphosis</Link>
              <Link to='/' className='mx-2'>Tokenomics</Link>
              <button className='btn btn-sm text-warning mx-2'>Connect Wallet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
