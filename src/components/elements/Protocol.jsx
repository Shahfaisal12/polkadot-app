import React from 'react'

const Protocol = () => {
  return (
    <div className="protocol-section py-5" style={{backgroundColor:'#DD0174'}}>
  <div className="container py-5">
    <div className="row mb-4 justify-content-around">
      <div className="col-sm-12 col-lg-5">
        <h1 className="text-white fw-bold">An open-source protocol built for everyone</h1>
      </div>
      <div className="col-sm-12 col-lg-6">
        <p className="text-white">Polkadot is an open-source project founded by the <a href="/" target="_blank" className="underline text-white">Web3 Foundation</a>.</p>
        <p className="text-white">Web3 Foundation has commissioned five teams and over 100 developers to build Polkadot, including:</p>
      </div>
    </div>
    <div className="row justify-content-around mt-5 mb-2">
      <div className="col-12">
        <div className="row justify-content-start justify-content-lg-around">
          <div className="col-4 col-lg col-md-2 mb-4 mb-md-0 d-flex justify-content-start justify-content-lg-center">
            <img className="icon" src="https://polkadot.network/assets/img/logos/logo-circle-parity-white.svg?v=ea608e625d" width={80} alt='' />
          </div>
          <div className="col-4 col-lg col-md-2 mb-4 mb-md-0 d-flex justify-content-start justify-content-lg-center">
            <img className="icon" src="https://polkadot.network/assets/img/logos/logo-circle-chainsafe-white.svg?v=ea608e625d" width={80} alt="" />
          </div>
          <div className="col-4 col-lg col-md-2 mb-4 mb-md-0 d-flex justify-content-start justify-content-lg-center">
            <img className="icon" src="https://polkadot.network/assets/img/logos/logo-circle-soramitsu-white.svg?v=ea608e625d" width={80} alt="" />
          </div>
          <div className="col-4 col-lg col-md-2 mb-4 mb-md-0 d-flex justify-content-start justify-content-lg-center">
            <img className="icon" src="https://polkadot.network/assets/img/logos/logo-circle-polkadot-js-white.svg?v=ea608e625d" width={80} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Protocol