import React from 'react'
import beeTokenImage from '../../img/honey-token.png'
import polygonTokenImage from '../../img/polygon-token.png'

const HoneyJar = () => {

  return (
    <div className='honeyjar'>
      <div className='container'>
        <div className='row py-5'>
          <div className='col-lg-3'></div>
          <div className='col-lg-6 text-center my-5'>
            <div className='honeyjar-box p-4'>
              <div className='h3 pt-3'>Honey Jar (Liquidity Pool)</div>
              <div className='text-left pt-3'>
                <button className='btn black-btn mr-2'>Buy</button>
                <button className='btn'>Sell Honey</button>
              </div>
              <div className='my-2 border px-3 py-1'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div>0</div>
                  <div>
                    <span className='mr-2'>$HNYB</span>
                    <img alt='SETIMAGE' src={beeTokenImage} className='img-fluid' />
                  </div>
                </div>
              </div>
              <div className='my-2 border px-3 py-1'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div>0</div>
                  <div>
                    <span className='mr-2'>$HNYB</span>
                    <img alt='SETIMAGE' src={polygonTokenImage} className='img-fluid' />
                  </div>
                </div>
              </div>
              <div className='mt-5 mb-4'>
                <button className='btn black-btn px-5'>Swap</button> 
              </div>
            </div>
          </div>
          <div className='col-lg-3'></div>
        </div>
      </div>
    </div>
  )
}

export default HoneyJar