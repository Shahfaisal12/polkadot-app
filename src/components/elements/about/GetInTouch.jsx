import React from 'react'

const GetInTouch = () => {
    return (
        <div className="get-in-touch-section py-3 py-md-5" style={{backgroundColor:'#000000'}}>
            <div className="container py-0 py-md-5">
                <div className="row text-center justify-content-center pt-0 pt-md-5">
                    <div className="col-12 col-lg-10 pb-3">
                        <h1 className="text-white fw-bold">Get in touch</h1>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-md-7 col-xl-4 pt-lg-0">
                        <div className="card bg-white card-pill shadow-lg rounded-lg">
                            <div className="card-body py-2 pr-0">
                                <div className="d-flex align-items-center">
                                    <img src="https://polkadot.network/assets/img/logos/logo-circle-chat.svg?v=ea608e625d" width={50} alt="" />
                                    <div className='mx-2'>
                                        <h5 className="mb-1 fw-bold">For general chat</h5>
                                        <p className="mb-0">Join the <a href="/" target="_blank" className='text-decoration-none'>Watercooler</a> or <a href="/" className='text-decoration-none' target="_blank">Discord</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-xl-4 pt-lg-0">
                        <div className="card bg-white shadow-lg card-pill rounded-lg">
                            <div className="card-body py-2 pr-0">
                                <div className="d-flex align-items-center">
                                    <img src="https://polkadot.network/assets/img/logos/logo-circle-newsletter.svg?v=ea608e625d" width={50} alt="" />
                                    <div className='mx-2'>
                                        <h5 className="mb-1 fw-bold">For press inquiries</h5>
                                        <p className="mb-0">Please fill out <a href='/' className="text-decoration-none">this</a> form</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-xl-4 pt-lg-0">
                        <div className="card bg-white card-pill shadow-lg rounded-lg">
                            <div className="card-body py-2 pr-0">
                                <div className="d-flex align-items-center">
                                    <a href="/"> <img src="https://polkadot.network/assets/img/logos/logo-circle-email.svg?v=ea608e625d" width={50} alt="" /></a>
                                    <div className='mx-2'>
                                        <a href="/" className='text-decoration-none text-black'>
                                            <h5 className="mb-1 fw-bold">For all other inquiries</h5></a>
                                        <a href="/" target="_blank" className="mb-0 text-decoration-none">support.polkadot.network</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row text-center justify-content-center mt-5 pb-0 pb-md-5">
                    <div className="col-sm-12 col-lg-6">
                        <h1 className="text-white fw-bold">Stay informed of updates and events</h1>
                        <p className="text-white mt-2 mb-4 fs-5">
                            <a href="/" className="text-white underline-white cursor-pointer">Subscribe to the newsletter</a> or <a href="/" className="text-white underline-white" target="_blank">read the blog</a>
                        </p>
                    </div>
                    <div className="col-sm-12 col-lg-6 border-left">
                        <h1 className="text-white fw-bold">Join the teams building Polkadot</h1>
                        <p className="text-white mt-2 fs-5">
                            See jobs at <a href="/" className="text-white underline-white" target="_blank">Web3 Foundation</a> or at <a href="/" class="text-white underline-white" target="_blank">Parity Technologies</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch