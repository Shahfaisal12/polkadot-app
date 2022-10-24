import React from 'react'

const Hero = () => {
  return (
    <div className="build-heoro-section py-3 py-md-5">
      <div className="container pb-0 pb-md-5">
        <div className="row text-center justify-content-center">
          <div className="col-md-12 col-lg-10 ">
            <h1 className="display-4 mb-4 fw-bold text-dark" data-aos="fade-up">Build on Polkadot</h1>
            <p className='fs-5'>Polkadot is 100% open-source. Anyone can contribute to the <a href="/" target="_blank" className="underline">codebase</a>, run a node,<br className="d-none d-md-block" /> or <a href="/" target="_blank" className="underline">build services</a> on Polkadot. You can even <a href="/" target="_blank" className="underline">get a grant</a>.</p>
            <a href="/" className="btn btn-subscribe btn-lg m-1">Start building</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero