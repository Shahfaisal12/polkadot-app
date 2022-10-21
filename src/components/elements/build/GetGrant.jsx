import React from 'react'

const GetGrant = () => {
  return (
    <div className="build-get-grant-sec py-3 py-md-5">
  <div className="container">
    <div className="row justify-content-around align-items-start">
      <div className="col-md-8 col-lg-6 mb-3 pr-lg-5">
        <h2 className="fw-bold">Get a grant to build the Polkadot ecosystem</h2>
        <p className="">Web3 Foundation provides grants to steward research and development of Polkadot and the Web3 tech stack. The program funds work on runtime modules and parachains, development tools, UI, protocol integrations, maintenance, and more.</p>
        <a className="btn btn-subscribe mt-2" href="/" target="_blank">Learn more</a>
      </div>
      <div className="col-md-8 col-lg-6">
        <ul className="">
          <li>Development and deployment tooling (e.g. IDEs, parachain development kits)</li>
          <li>Polkadot Runtime Modules (e.g. interoperability, governance)</li>
          <li>Second layer protocols (e.g. dedicated parachains, state channels)</li>
          <li>Monitoring (e.g. explorers)</li>
          <li>Protocol integrations (e.g. bridges to other blockchains, distributed file storage)</li>
        </ul>
      </div>
    </div>
  </div>
</div>
  )
}

export default GetGrant