import React from 'react'

const Powering = () => {
    return (
        <div className="powering-section bg-dark py-5">
            <div className="container">
                <div className="row text-center justify-content-center">
                    <div className="col-12 col-sm-8 col-lg-9 pb-3 pb-sm-0">
                        <h1 className="text-white fw-bold">Powering the Polkadot network</h1>
                        <p className="text-white mt-4 mb-0">
                            The DOT token serves three distinct purposes: <br className="d-none d-xl-block" />governance over the network, staking and bonding.
                        </p>
                    </div>
                </div>
                <div className="row text-center mb-4 justify-content-md-center justify-content-lg-around">
                    <div className="col-12 col-md-6 col-lg-4 mb-md-2">
                        <span className="card bg-dark shadow-none border-0">
                            <div className="px-md-3 pt-md-3 mx-4 mx-md-1 mx-lg-3">
                                <img className="card-img p-3" src="https://polkadot.network/assets/img/icons/home-icon-token-1.svg?v=ea608e625d" alt="" />
                            </div>
                            <div className="card-body">
                                <div>
                                    <h5 className="h5 text-white mb-2 d-block">Governance</h5>
                                    <p className="text-white">Polkadot token holders have complete control over the protocol. All privileges, which on other platforms are exclusive to miners, will be given to the Relay Chain participants (DOT holders), including managing exceptional events such as protocol upgrades and fixes.</p>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-md-2">
                        <span className="card bg-dark shadow-none border-0">
                            <div className="px-md-3 pt-md-3 mx-4 mx-md-1 mx-lg-3">
                                <img className="card-img p-3" src="https://polkadot.network/assets/img/icons/home-icon-token-2.svg?v=ea608e625d" alt="" />
                            </div>
                            <div className="card-body">
                                <div>
                                    <h5 className="h5 text-white mb-2 d-block">Staking</h5>
                                    <p className="text-white">Game theory incentivizes token holders to behave in honest ways. Good actors are rewarded by this mechanism whilst bad actors will lose their stake in the network. This ensures the network stays secure.</p>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-md-2">
                        <span className="card bg-dark shadow-none border-0">
                            <div className="px-md-3 pt-md-3 mx-4 mx-md-1 mx-lg-3">
                                <img className="card-img p-3" src="https://polkadot.network/assets/img/icons/home-icon-token-3.svg?v=ea608e625d" alt="" />
                            </div>
                            <div className="card-body">
                                <div>
                                    <h className="h5 text-white mb-2 d-block">Bonding</h>
                                    <p className="text-white">New parachains are added by bonding tokens. Outdated or non-useful parachains are removed by removing bonded tokens. This is a form of proof of stake.</p>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col col-12 col-md-8 col-lg-4 text-center">
                        <span className="h3 d-block mb-4 text-white">Learn more about the DOT token</span>
                        <a className="btn btn-subscribe btn-lg text-white" href="/">Discover DOT</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Powering