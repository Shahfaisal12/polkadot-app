import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Base = (props) => {
  return (
    <>
    <Header />
    <div className='mt-5 position-relative'>
    {props.children}
      <a href="/" target="_blank" class="fixedButton" >
        <div className="roundedFixedBtn d-flex align-items-center justify-content-center">
          <img class="logo" src="https://polkadot.network/assets/img/icons/support.svg?v=ea608e625d" width={30} alt="" />
        </div>
      </a>
    </div>
    <Footer />
    </>
  )
}

export default Base