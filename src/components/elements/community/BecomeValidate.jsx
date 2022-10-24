import React from 'react'

const BecomeValidate = () => {
    return (
        <div className="Become-validator-section pt-3 pt-md-5">
            <div className="container pt-0 pt-md-5">
                <div className="row mb-4">
                    <div className="col">
                        <h3 className="fw-bold">Become a validator</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 pr-md-3 pr-lg-5">
                        <article>
                            <h5>1. Set up your machine</h5>
                            <p>In addition to any usual CLI parameters that you run polkadot with, you'll need to add an extra two:</p>
                            <p>
                            </p><ul>
                                <li><code>--validator</code> This tells your node to try to validate when it sees itself as a listed authority on the network;</li>
                                <li><code>--key &lt;SEED&gt;</code> This provides your node with a secret key that lets it know whether it's a listed authority on the network, and, if it is, lets it sign statements to authorise the creation of new blocks.</li>
                            </ul>
                            <p></p>
                        </article>
                    </div>
                    <div className="col-md-6">
                        <article>
                            <h5>2. Apply to validate</h5>
                            <p>New validators will be chosen every 24 hours on mainnet. You’ll need to create separate accounts for Controller, Session, and Stash keys on the Polkadot UI (<a href="/" target="_blank" className="underline text-break">https://polkadot.js.org/apps/#/accounts/create</a>). These accounts will be used to represent and control the validator node you just set up.</p>
                            <p>Next you will need to get some DOT from the faucet or by asking on Element. Assuming you have more DOT than the lowest staked validator or there is an open validator slot, you can register to be staked. A step-by-step guide demonstrating how to set up your accounts and bond your DOT is available on the <a href="/" target="_blank" className="underline">wiki</a>.</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BecomeValidate