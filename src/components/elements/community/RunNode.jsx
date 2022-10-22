import React from 'react'

const AnyTypeBlock = () => {
    return (
        <div className="any-typ-block py-5 bg-172026">
            <div className="container">
                <div className="row justify-content-center py-4">
                    <div className="col-md-8">
                        <h1 className='text-white fw-bold text-center mb-4'>Run a node and interact with the Polkadot testnet</h1>
                    </div>
                </div>
                <div className="row pt-0">
                    <div className="col-md-6 col-12">
                        <p className="text-white">If you'd like to play with Polkadot, you'll need to install and run the Parity Polkadot client. <br className="d-none d-lg-block" /> Get the client at <a href="/" className="badge badge-pink badge-pill" target="_blank">Parity’s Polkadot repo</a></p>
                        <p className="text-white">Alexander is the current default public testnet for Polkadot. By default, any node running on the Alexander testnet will appear on the <a href="/" className="badge badge-pink badge-pill" target="_blank">telemetry.polkadot.io</a></p>
                        <p className="lead text-white">The testnet allows you to create accounts, propose governance referenda, stake testnet DOT to become a validator or nominate other accounts as validators with your testnet DOT.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="text-white">

                            <p>Connect your running node to the main <a href="/" className="badge badge-pink badge-pill" target="_blank">Polkadot user interface</a> to play around.</p>
                            <p>Get testnet DOT to stake by following these instructions on the <a href="/" className="badge badge-pink badge-pill" target="_blank">Polkadot Wiki</a></p>
                            <p>If you don’t want to run a node, you can still interact with the network by using <a href="/" className="badge badge-pink badge-pill" target="_blank">the explorer</a></p>
                            <p>Before interacting with the testnet, please read this <a href="/" className="badge badge-pink badge-pill">legal notice</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnyTypeBlock