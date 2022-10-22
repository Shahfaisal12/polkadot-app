import React from 'react'

const AnyTypeBlock = () => {
    return (
        <div className="any-typ-block bg-172026">
            <div className="row pt-0">
                <div className="col-md-8 col-12 overflow-hidden">
                    <img src="https://polkadot.network/assets/img/dg-network-xl-2.svg?v=ea608e625d" alt="" style={{transform: 'scale(1.2)'}} />
                </div>
                <div className="col-md-4 px-2 pt-4 p-sm-4">
                    <div className="py-md-4 text-white" >
                        <h2 className="text-white font-weight-bold">Any type of data across any type of blockchain</h2>
                        <p>Polkadot is a network protocol that allows arbitrary data—not just tokens—to be transferred across blockchains.</p>
                        <p>This means Polkadot is a true multi-chain application environment where things like cross-chain registries and cross-chain computation are possible.</p>
                        <p>Polkadot can transfer this data across public, open, permissionless blockchains as well as private, permissioned blockchains.</p>
                        <p>This makes it possible to build applications that get permissioned data from a private blockchain and use it on a public blockchain. For instance, a school's private, permissioned academic records chain could send a proof to a degree-verification smart contract on a public chain.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnyTypeBlock