import React from 'react'

const StayJoin = () => {
  return (
     <div className="contact-stay-join-section" style={{backgroundColor:'#172026'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-xl-4 pt-lg-0">
                            <div className="card bg-white shadow-lg card-pill rounded-lg">
                                <div className="card-body py-2 pr-0">
                                    <div className="d-flex align-items-center">
                                        <img src="https://polkadot.network/assets/img/logos/logo-circle-element.svg?v=ea608e625d" alt="" width={50} />
                                            <div>
                                                <h5 className="mb-1">For general chat</h5>
                                                <p className="mb-0">Join the <a href="/" target="_blank">Watercooler</a> or <a href="/" target="_blank">Discord</a></p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-xl-4 pt-lg-0">
                            <div className="card bg-white shadow-lg card-pill rounded-lg">
                                <div className="card-body py-2 pr-0">
                                    <div className="d-flex align-items-center">
                                        <img src="https://polkadot.network/assets/img/logos/logo-circle-newsletter.svg?v=ea608e625d" alt="" width={50} />
                                            <div>
                                                <h5 className="mb-1">For press inquiries</h5>
                                                <p className="mb-0">Please fill out <span className="text-primary">this</span> form</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-xl-4 pt-lg-0">
                            <div className="card bg-white shadow-lg card-pill rounded-lg">
                                <a href="/" target="_blank">
                                    <div className="card-body py-2 pr-0">
                                        <div className="d-flex align-items-center">
                                            <img src="https://polkadot.network/assets/img/logos/logo-circle-chat.svg?v=ea608e625d" alt="" width={50} />
                                                <div>
                                                    <h5 className="mb-1">For all other inquiries</h5>
                                                    <p className="mb-0 text-primary">support.polkadot.network</p>
                                                </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center justify-content-center mt-4">
                        <div className="col-sm-12 col-lg-6 border-right-edebeb">
                            <span className="h4 text-white d-block">Stay informed of updates and events</span>
                            <p className="text-white mt-2">
                                <a is="utm-link" href="/" className="text-white underline" target="_blank">Subscribe to the newsletter</a> or <a href="/blog" className="text-white underline" target="_blank">read the blog</a>
                            </p>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <span className="h4 text-white d-block">Join the teams building Polkadot</span>
                            <p className="text-white mt-2">See jobs at <a href="/" className="text-white underline" target="_blank">Web3 Foundation</a> or at <a href="/" className="text-white underline" target="_blank">Parity Technologies</a></p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default StayJoin