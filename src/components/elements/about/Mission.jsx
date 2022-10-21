import React from 'react'

const Mission = () => {
    return (
        <div class="about-missio-section py-3 py-md-5" style={{ backgroundColor: '#172026' }}>
            <div class="container">
                <div class="row justify-content-around">
                    <div class="col-sm-12 col-lg-5">
                        <h1 class="text-white fw-bold">The Polkadot mission</h1>
                        <p class="text-white mt-4 fs-5">We envision a Web where our identity and our data is our own - safely secured from any central authority.</p>
                    </div>
                    <div class="col-sm-12 col-lg-6">
                        <div className="text-white fs-5">
                            <p>Polkadot will enable a completely decentralized web where users are in control.</p>
                            <p>Polkadot is built to connect private and consortium chains, public and permissionless networks, oracles, and future technologies that are yet to be created. Polkadot facilitates an internet where independent blockchains can exchange information and transactions in a trustless way via the Polkadot relay chain.</p>
                            <p>Polkadot makes it easier than ever to create and connect decentralized applications, services, and institutions. By empowering innovators to build better solutions, we seek to free society from its reliance on a broken web where its large institutions can’t violate our trust.</p>
                            <a class="btn btn-subscribe mt-2 text-white" href="/">Learn About the Technology</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission