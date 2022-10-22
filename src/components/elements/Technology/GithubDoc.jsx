import React from 'react'

const GithubDoc = () => {
    return (
        <div className="tech-github-sec pb-3 pb-md-5 bg-172026">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="negative">
                        <div className="row top-negative">
                            <div className="col-md-6 col-xl-4 mt-0 mb-4">
                                <a href="/" target="_blank" className='text-decoration-none text-black'>
                                    <div className="card shadow-lg bg-white rounded-lg">
                                        <div className="card-body py-2">
                                            <div className="d-flex align-items-center">
                                                <img src="https://polkadot.network/assets/img/logos/logo-circle-github.svg?v=ea608e625d" width={50} alt='' />
                                                <div className='mx-2'>
                                                    <h5 className="mb-1">GitHub</h5>
                                                    <p className="mb-0">Latest version &amp; history.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-xl-4 mb-4 " >
                                <a href="/" target="_blank" className='text-decoration-none text-black'>
                                    <div className="card shadow-lg bg-white rounded-lg">
                                        <div className="card-body py-2">
                                            <div className="d-flex align-items-center">
                                                <img src="https://polkadot.network/assets/img/logos/logo-circle-documentation.svg?v=ea608e625d" width={50} alt='' />
                                                <div className='mx-2'>
                                                    <h5 className="mb-1">Documentation</h5>
                                                    <p className="mb-0">Read the documentation.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-xl-4 mb-4">
                                <a href="/" target="_blank" className='text-decoration-none text-black'>
                                    <div className="card shadow-lg bg-white rounded-lg">
                                        <div className="card-body py-2">
                                            <div className="d-flex align-items-center">
                                                <img src="https://polkadot.network/assets/img/logos/logo-circle-element.svg?v=ea608e625d" width={50} alt='' />
                                                <div className='mx-2'>
                                                    <h5 className="mb-1">Element chat</h5>
                                                    <p className="mb-0">Get your questions answered.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GithubDoc