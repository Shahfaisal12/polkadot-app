import React from "react";
// import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="text-content">
              <h1 className="text-center text-md-start fw-bold display-3">
                The multichain vision for Web3 starts here.
              </h1>
              <p className="text-center text-md-start fs-5">Polkadot unites and secures a growing ecosystem of specialized blockchains called parachains. Apps and services on Polkadot can securely communicate across chains, forming the basis for a truly interoperable decentralized web.</p>
              <div className="d-none d-md-block justify-content-center mt-2">
                <a href="/" className="btn btn-subscribe btn-lg mx-2 color-E6007A" >Learn Parachains</a>
                <a href="/" className="btn btn-subscribe btn-lg color-E6007A">Learn Cross-Chain</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
              <div className="main-container-image d-flex align-items-center justify-content-center">
              <div className="img-rotation"></div>
              <div className="img-dots"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
