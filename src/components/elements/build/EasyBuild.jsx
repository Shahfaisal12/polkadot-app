import React from 'react'

const EasyBuild = () => {
    return (
        <div className="eassy-build-section py-3 py-md-5" style={{backgroundColor:'#172026'}}>
            <div className="container py-0 py-md-5">
                <div className="row justify-content-center text-center mb-4">
                    <div className="col-12 col-md-8">
                        <h2 className="text-white fw-bold">Easily build a Polkadot parachain with Substrate</h2>
                        <p className="mb-0 color-E6007A fs-5">Build your application-specific blockchain with the <a href="/" className="text-white white-underline" target="_blank">Substrate</a> framework now and easily connect it to Polkadot after launch.</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4 d-md-flex mb-4 mb-md-0">
                        <div className="d-flex">
                            <div>
                                <h5 className="text-white mb-1 mt-2 fw-bold">Native Polkadot compatibility</h5>
                                <p className="text-white">Blockchains built with Substrate are natively compatible with Polkadot, so they can be easily connected to Polkadot as a parachain or parathread.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 d-md-flex mb-4 mb-md-0">
                        <div className="d-flex">
                            <div>
                                <h5 className="text-white mb-1 mt-2 fw-bold">Fork-free upgrades</h5>
                                <p className="text-white">Upgrade your blockchain without a hard fork. Your runtime is a Wasm binary stored on-chain and can be updated using your chain’s governance mechanism.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 d-md-flex mb-4 mb-md-0">
                        <div className="d-flex">
                            <div>
                                <h5 className="text-white mb-1 mt-2 fw-bold">Plug-and-play modular framework</h5>
                                <p className="text-white">Substrate allows you to simply plug in the functionalities you need, while also giving you the freedom to customize as needed.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 d-md-flex mb-4 mb-md-0">
                        <div className="d-flex">
                            <div>
                                <h5 className="text-white mb-1 mt-2 fw-bold">Interchain connectivity</h5>
                                <p className="text-white">By connecting your blockchain to Polkadot, your blockchain will be able to pass arbitrary messages to other chains in the Polkadot network.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 d-md-flex mb-4 mb-md-0">
                        <div className="d-flex">
                            <div>
                                <h5 className="text-white mb-1 mt-2 fw-bold">Instant security</h5>
                                <p className="text-white">Simply by connecting your blockchain to Polkadot, your blockchain will be secured by Polkadot’s <a href="https://medium.com/polkadot-network/how-polkadot-tackles-the-biggest-problems-facing-blockchain-innovators-1affc1309b0f" className="text-white text-underline" target="_blank" rel="nofollow noopener noreferrer">pooled security</a>.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 d-md-flex mb-4 mb-md-0">
                        <div className="d-flex">
                            <div>
                                <h5 className="text-white mb-1 mt-2 fw-bold">Multiple languages</h5>
                                <p className="text-white">With Substrate, you can write your blockchain logic in any language that can compile to WebAssembly (Rust, C/C++, C#, Go, etc).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EasyBuild