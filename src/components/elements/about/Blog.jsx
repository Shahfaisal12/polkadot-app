import React from 'react'

const Blog = () => {
    return (
        <div className="blog-section py-3 my-md-5">
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col">
                        <h1 className="fw-bold">From the blog</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 d-flex">
                        <div className="card border shadow">
                            <a href="/">
                                <img className="card-img-top" src="https://polkadot.network/content/images/2022/10/image1.png" height={150} alt="" />
                            </a>
                            <div className="card-body py-3">
                                <a href="/" className="mb-2 d-block text-decoration-none color-E6007">Parachain</a>
                                <a href="/" className='text-decoration-none text-black'>
                                    <h5>First Parachain Successfully Migrates from Kusama to Polkadot</h5>
                                </a>
                                <div>
                                    <p className="mb-0 ">KILT Protocol's migration from Kusama to Polkadot is an important technical milestone and the first parachain migration. Polkadot's 'canary network' model allows Web3 projects to test their technology in a real-world environment before upgrading to stable production networks....</p>
                                </div>
                            </div>
                            <div className="card-footer border-top-0 py-3 bg-white">
                                <div className="d-flex align-items-center">
                                    <img src="https://polkadot.network/content/images/2021/12/ghost_avatar_polkadot.png" alt="" width={30} className="avatar" />
                                    <span className='px-2'>Polkadot</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 d-flex">
                        <div className="card border shadow">
                            <a href="/" className='text-decoration-none' >
                                <img className="card-img-top" src="https://polkadot.network/content/images/2022/09/004-smol.png" height={150} alt="" />
                            </a>
                            <div className="card-body py-3">
                                <a href="/" className="mb-2 d-block text-decoration-none color-E6007">Polkadot</a>
                                <a href="/" className='text-decoration-none text-black'>
                                    <h5>Polkadot Roadmap Roundup</h5>
                                </a>
                                <div>
                                    <p className="mb-0">A proposed roadmap for upcoming developments on Polkadot. Get the latest status on asynchronous backing, parathreads, XCMv3, governance, common-good parachains and more....</p>
                                </div>
                            </div>
                            <div className="card-footer border-top-0 py-3 bg-white">
                                <div className="d-flex align-items-center">
                                    <img src="https://polkadot.network/content/images/2021/12/ghost_avatar_polkadot.png" alt="" width={30} className="avatar" />
                                    <span className='px-2'>Polkadot</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 d-flex">
                        <div className="card border shadow">
                            <a href="/">
                                <img className="card-img-top" src="https://polkadot.network/content/images/2022/08/image1.jpg" height={150} alt="" />
                            </a>
                            <div className="card-body py-3">
                                <a href="/" className="mb-2 d-block text-decoration-none color-E6007">Polkadot</a>
                                <a href="/" className='text-decoration-none text-black'>
                                    <h5>Sub0, the Polkadot Developer Conference, comes to Lisbon in November</h5>
                                </a>
                                <div>
                                    <p className="mb-0">The two-day live sub0 conference will run on November 28th-29th. Featuring keynote presentations, breakout sessions, workshops &amp; side events. Sign up for ticket updates....</p>
                                </div>
                            </div>
                            <div className="card-footer border-top-0 py-3 bg-white">
                                <div className="d-flex align-items-center">
                                    <img src="https://polkadot.network/content/images/2021/12/ghost_avatar_polkadot.png" width={30} alt="" className="avatar" />
                                    <span className='px-2'>Polkadot</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog