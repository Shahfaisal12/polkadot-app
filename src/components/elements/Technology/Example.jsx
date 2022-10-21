import React from 'react'

const Example = () => {
  return (
    <section className="example-section py-3 py-md-5">
  <div className="container py-0 py-md-5">
    <div className="row mb-4 text-center">
      <div className="col-8 mx-auto">
        <h1>What are teams building on Polkadot? Just a few examples:</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 py-3">
        <div className="card border shadow">
          <div className="card-body">
            <p className="mb-0">
              <strong>Smart contract chains</strong> with WebAssembly smart contracts (<a href="/" target="_blank" className="underline">Astar</a>, <a href="/" target="_blank" className="underline">Moonbeam</a>)
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card border shadow">
          <div className="card-body">
            <p className="mb-0">
              <strong>Data curation networks</strong> that connect all file storage chains into curated data sets 
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card border shadow">
          <div className="card-body">
            <p className="mb-0">
              <strong>Oracle chains</strong> that make off-chain data available to all contracts on the Polkadot network (<a href="/" target="_blank" className="underline">ChainLink</a>)
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card border shadow">
          <div className="card-body">
            <p className="mb-0">
              <strong>Identity chains</strong> that link accounts to a persistent identity and enable access to other parachains through fewer accounts (<a href="/" target="_blank" className="underline">Kilt</a>)
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card border shadow">
          <div className="card-body">
            <p className="mb-0">
              <strong>Financial chains</strong> that allow you to hold all your assets in one portfolio, including via bridges to Bitcoin, Ethereum, Bitcoin Cash, Litecoin and ZCash (<a href="/" target="_blank" className="underline">Acala</a>, <a href="/" target="_blank" className="underline">Parallel Finance</a>)
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card border shadow">
          <div className="card-body">
            <p className="mb-0">
              <strong>Internet of Things chains</strong> that set IoT standards for machine-to-machine communication (<a href="/" target="_blank" className="underline">Robonomics</a>)
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card border shadow">
          <div className="card-body">
            <p className="mb-0">
              <strong>Zero Knowledge</strong> privacy chains, or bridges to existing ZK-snarks chains
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card border shadow">
          <div className="card-body">
            <p className="mb-0"><strong>File storage chains</strong> that incentivize storing data on-chain</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card border shadow">
          <div className="card-body">
            <p className="mb-0"><strong>Bridge to Ethereum</strong>, allowing Ethereum smart contracts to interact with the Polkadot network</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Example