import React from 'react'

const Parachains = () => {
    return (
        <div class="para-chain-sec py-3 py-md-5 bg-172026" >
            <div class="container">
                <div class="row text-center justify-content-center">
                    <div class="col-12 col-md-10 col-lg-8">
                        <h2 class="h1 mb-4 text-white fw-bold">Parachains: parallel transaction processing</h2>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12 col-sm-12 col-lg-5 mb-4 mb-lg-0 text-white fs-5">
                        <p>Parachains are specialized blockchains that connect to Polkadot. They will have characteristics specialized for their use cases and the ability to control their own governance.</p>
                        <p>Interactions on parachains are processed in parallel, enabling highly scalable systems.</p>
                        <p>Transactions can be spread out across the chains, allowing many more transactions to be processed in the same period of time.</p>
                        <a href="/" class="btn btn-prachain btn-white btn-lg mt-1" target="_blank">Learn more about parachains</a>
                    </div>
                    <div class="col-12 col-sm-6 offset-lg-1 col-lg-3">
                        <p class="text-white fs-5"><strong>Current method:</strong><br />Single transaction</p>
                        <img src="https://polkadot.network/assets/img/dg-transactions-old.svg?v=ea608e625d" alt='' class="mb-2" />
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <p class="text-white fs-5"><strong>Polkadot method:</strong><br />Multi parallelized transactions</p>
                        <img src="https://polkadot.network/assets/img/dg-transactions-new.svg?v=ea608e625d" alt='' class="mb-2" />
                    </div>
                </div>
            </div>
            </div>
  )
}

export default Parachains;