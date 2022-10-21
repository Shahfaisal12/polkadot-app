import React from 'react'

const Tools = () => {
  return (
    <div className="build-tools-section py-3 py-md-5">
    <div className="container py-0 py-md-5">
      <div className="row mb-5 mb-md-5 text-center">
        <div className="col mb-0 mb-md-5">
          <h3 className="fs-1 fw-bold">Tools that come with Substrate</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="card flex-fill border shadow mb-4">
            <div className="card-body py-3">
              <h6 className="mb-1 fs-4 color-E6007A fw-bold"><a className="fw-bold color-E6007A fw-bold text-decoration-none" href="/" target="_blank">Polkadot Telemetry Service</a></h6>
              <p className="mb-0">Network information</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card flex-fill border shadow mb-4">
            <div className="card-body py-3">
              <h6 className="mb-1 fs-4"><a className="fw-bold color-E6007A fw-bold text-decoration-none" href="/" target="_blank">Substrate and Polkadot UI</a></h6>
              <p className="mb-0">Built with React.js and RxJS</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card flex-fill border shadow mb-4">
            <div className="card-body py-3">
              <h6 className="mb-1 fs-4"><a className="fw-bold color-E6007A fw-bold text-decoration-none" href="/" target="_blank">Substrate UI</a></h6>
              <p className="mb-0">Built with the <a href="/" target="_blank" className="underline">Bonds oo7</a> library</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card flex-fill border shadow mb-4">
            <div className="card-body py-3">
              <h6 className="mb-1 fs-4"><a className="fw-bold color-E6007A fw-bold text-decoration-none" href="/" target="_blank">Polkabot</a></h6>
              <p className="mb-0">Network monitoring and reporting</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card flex-fill border shadow">
            <div className="card-body py-3">
              <h6 className="mb-1 fs-4"><a className="fw-bold color-E6007A fw-bold text-decoration-none" href="/" target="_blank">Polkascan</a></h6>
              <p className="mb-0">Blockchain data explorer and analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Tools