import React from 'react'

const SecurityModel = () => {
    return (
        <div className="security-model-sec py-3 py-md-5">
            <div className="container pt-3">
                <div className="row justify-content-center align-items-center flex-row-reverse">
                    <div className="col-md-6 col-12 text-center my-3 my-md-5">
                        <img src="https://polkadot.network/assets/img/dg-security-model.svg?v=ea608e625d" alt="" />
                    </div>
                    <div className="col-md-6 col-12  my-3 my-md-5">
                        <h2 className="mb-4 fw-bold">A better security model</h2>
                        <p>In both Proof-of-Work and Proof-of-Stake systems, blockchains compete with each other over resources to secure their networks, and blockchains are easily attacked until they develop a significant community to support their network.</p>
                        <p>Polkadot takes a different approach by letting blockchains pool their security, which means that the blockchains' security is aggregated and applied to all.</p>
                        <p>By connecting to Polkadot, blockchain developers can secure their blockchain from day one.</p>
                    </div>
                    <div className="col-md-6 col-12  my-3 my-md-5">
                        <h2 className="mb-4 fw-bold">XCM: a secure cross-chain communication standard</h2>
                        <p>For blockchains to work together and form the basis of Web3, they need a common language for communication. Polkadot sets the standard with XCM, a cross-consensus communication format and programming language that allows blockchains of different designs to securely exchange arbitrary data, code, and value. In this way, a new wave of rich cross-chain applications and services can be built that tap into the features and benefits of different chains.</p>
                        <a href="/" className="underline">Learn more about XCM</a>
                    </div>
                    <div className="col-md-6 col-12 text-center my-3 my-md-5">
                        <img src="https://polkadot.network/assets/img/dg-xcm.svg?v=ea608e625d" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4 text-center my-3 my-md-5">
                        <img src="https://polkadot.network/assets/img/dg-green-energy.svg?v=ea608e625d" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-6 my-3 my-md-5">
                        <h2 className="mb-4 fw-bold">A green, energy-efficient protocol</h2>
                        <p>It’s hard to get behind blockchain as the next technological revolution when it wastes so much energy. Polkadot is designed to power the web’s next big wave of innovation, without the high energy consumption of conventional proof-of-work blockchains.</p>
                        <p>Polkadot’s Nominated Proof-of-stake (NPoS) model uses a small fraction of the energy consumed by conventional blockchains, and has the <a href="/" class="underline" target="_blank">lowest carbon footprint</a> among proof-of-stake protocols analyzed in <a href="/" target="_blank" class="underline">recent research</a>.</p>
                    </div>
                    <div className="col-md-6 col-lg-6 my-3 my-md-5">
                        <h2 className="mb-4 fw-bold">Transparent on-chain governance</h2>
                        <p>Updates to the protocol happen fork-free via transparent on-chain voting, so protocol development never stalls due to the lack of a clear process. The relay chain uses a sophisticated governance mechanism that is designed to establish a transparent, accountable and binding process for resolving disputes and upgrading the network.</p>
                        <p>DOT tokens are used to participate in governance decisions, including tabling proposals, voting, and bonding.</p>
                        <p>Parachains are free to design their own governance mechanisms, allowing for maximum freedom without affecting other parachains.</p>
                        <a href="/" className="underline">Learn more about Polkadot’s governance</a>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center my-3 my-md-5">
                        <img src="https://polkadot.network/assets/img/dg-governance.svg?v=ea608e625d" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4 text-center my-3 my-md-5">
                        <img src="https://polkadot.network/assets/img/dg-treasury.svg?v=ea608e625d" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-6 my-3 my-md-5">
                        <h2 className="mb-4 fw-bold">On-chain treasury for decentralized project funding</h2>
                        <p>Polkadot’s governance system also features an on-chain treasury that the community can use to fund projects that benefit the network. Any DOT holder can submit project funding and bounty proposals, and can nominate community members for tips based on work completed.</p>
                        <p>With tens of millions of DOT available for spending, the treasury represents a powerful resource for fueling Web3 innovation.</p>
                        <a href="/" className="underline">Learn more about the Polkadot treasury</a>
                    </div>
                    <div className="col-md-6 col-lg-6 my-3 my-md-5">
                        <h2 class="mb-4 fw-bold">GRANDPA: a trustworthy consensus algorithm</h2>
                        <p>Polkadot uses its original GRANDPA (GHOST-based Recursive Ancestor Deriving Prefix Agreement) consensus for a more secure and resilient network</p>
                        <p>Under good network conditions, GRANDPA can finalize blocks nearly instantly. Under bad network conditions, like a network partition, GRANDPA can finalize large quantities of blocks (theoretically millions) at once when the partitions resolve.</p>

                        <a href="/" className="underline">Learn more about GRANDPA.</a>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center my-3 my-md-5">
                        <img src="https://polkadot.network/assets/img/dg-consensus.svg?v=ea608e625d" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecurityModel