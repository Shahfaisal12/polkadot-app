import React from 'react'

const ConnectingDots = () => {
  return (
    <div className="connect-dot-sec py-3 py-md-5">
  <div className="container  py-0 py-md-5">
    <div className="row">
      <div className="col-12">
        <h2 className="mb-5 fw-bold text-center text-md-start">Connecting the dots</h2>
      </div>
    </div>
    <div className="row justify-content-start mb-5">
      <div className="col-12 col-md-6 col-lg-3 mb-3">
        <div className="card h-100 border-0">
          <img className="card-img mb-3" src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-relay-chain.svg?v=ea608e625d" alt='' style={{width:'130px'}}/>
          <h5 className="mb-1 fw-bold text-center text-md-start">Relay Chain</h5>
          <p className="text-center text-md-start">The heart of Polkadot, responsible for the network’s shared security, consensus and cross-chain interoperability.</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 mb-3">
        <div className="card h-100 border-0">
          <img className="card-img mb-3" src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-parachain.svg?v=ea608e625d" alt='' style={{width:'130px'}}/>
          <h5 className="mb-1 fw-bold text-center text-md-start">Parachains</h5>
          <p className="text-center text-md-start">Sovereign blockchains that can have their own tokens and optimize their functionality for specific use cases.</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 mb-3">
        <div className="card h-100 border-0">
          <img className="card-img mb-3" src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-parathread.svg?v=ea608e625d" alt='' style={{width:'130px'}}/>
          <h5 className="mb-1 fw-bold text-center text-md-start">Parathreads</h5>
          <p className="text-center text-md-start">Similar to parachains but with a pay-as-you-go model. More economical for blockchains that don’t need continuous connectivity to the network.</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 mb-3">
        <div className="card h-100 border-0">
          <img className="card-img mb-3" src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-bridge.svg?v=ea608e625d" alt='' style={{width:'130px'}}/>
          <h5 className="mb-1 fw-bold text-center text-md-start">Bridges</h5>
          <p className="text-center text-md-start">Allow parachains and parathreads to connect and communicate with external networks like Ethereum and Bitcoin.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <h3 className="mb-4 fw-bold text-center text-md-start">Consensus Roles</h3>
      </div>
    </div>
    <div className="row justify-content-start mb-5 align-content-md-stretch">
      <div className="col-12 col-md-6 col-lg-3 mb-3">
        <div className="card h-100 border-0">
          <img className="card-img mb-3" src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-nominator.svg?v=ea608e625d" alt='' style={{width:'130px'}} />
          <h5 className="mb-1 fw-bold text-center text-md-start">Nominators</h5>
          <p className="text-center text-md-start">Secure the Relay Chain by selecting trustworthy validators and staking dots.</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 mb-3">
        <div className="card h-100 border-0">
          <img className="card-img mb-3" src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-validator.svg?v=ea608e625d" alt='' style={{width:'130px'}} />
          <h5 className="h6 mb-1 fw-bold text-center text-md-start">Validators</h5>
          <p className="text-center text-md-start">Secure the relay chain by staking dots, validating proofs from collators and participating in consensus with other validators.</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 mb-3">
        <div className="card h-100 border-0">
          <img className="card-img mb-3" src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-collator.svg?v=ea608e625d" alt='' style={{width:'130px'}}/>
          <h5 className="mb-1 fw-bold text-center text-md-start">Collators</h5>
          <p className="text-center text-md-start">Maintain shards by collecting shard transactions from users and producing proofs for validator.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <h2 className="mb-4 fw-bold text-center text-md-start">Governance Roles</h2>
      </div>
    </div>
    <div className="row justify-content-start align-content-md-stretch">
      <div className="col-12 col-md-6 col-lg-3 mb-3">
        <div className="card h-100 border-0">
          <img className="card-img mb-3" src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-council-member-2.svg?v=ea608e625d"alt='' style={{width:'130px'}}/>
          <h5 className="mb-1 fw-bold text-center text-md-start">Council Members</h5>
          <p className="text-center text-md-start">Elected to represent passive stakeholders in two primary governance roles: proposing referenda and vetoing dangerous or malicious referenda.</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 mb-3">
        <div className="card h-100 border-0">
          <img className="card-img mb-3" src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-technical-committee-2.svg?v=ea608e625d" alt='' style={{width:'130px'}}/>
          <h5 className="mb-1 fw-bold text-center text-md-start">Technical Committee</h5>
          <p className="text-center text-md-start">Composed of teams actively building Polkadot. Can propose emergency referenda, together with the council, for fast-tracked voting and implementation.</p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default ConnectingDots