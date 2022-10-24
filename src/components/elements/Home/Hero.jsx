import React from 'react';
import { ScrollRotate } from 'react-scroll-rotate';

const Hero = () => {

  return (
    <div className="hero-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 order-2 order-md-1">
            <div className="text-content">
              <h1 className="text-center text-md-start fw-bold display-3">
                The multichain vision for Web3 starts here.
              </h1>
              <p className="text-center text-md-start fs-5">Polkadot unites and secures a growing ecosystem of specialized blockchains called parachains. Apps and services on Polkadot can securely communicate across chains, forming the basis for a truly interoperable decentralized web.</p>
              <div className="d-none d-md-block justify-content-center mt-2">
                <a href="/" className="btn btn-subscribe btn-lg mx-2" >Learn Parachains</a>
                <a href="/" className="btn btn-subscribe btn-lg">Learn Cross-Chain</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 d-flex align-items-center justify-content-center order-1 order-md-2">
            <div className='position-absolute'>
              <ScrollRotate from={360} to={180} loops={1} method={'1px'} animationDuration={0.3}>
                <img src="https://polkadot.network/assets/img/hero/xcm-animation-inner.png?v=ea608e625d" className="img-rotation" alt="" />
              </ScrollRotate>
            </div>
            <ScrollRotate from={90} to={0} loops={1} method={'1px'} animationDuration={0.3}>
              <img src="https://polkadot.network/assets/img/hero/xcm-animation-outer.svg?v=ea608e625d" className="img-dots" alt="" />
            </ScrollRotate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
