import React from "react";

import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaDiscord, FaRedditAlien } from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <div className="footer-section pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6 ourservice">
              <ul>
                <div className="headering">
                  <h5>General</h5>
                </div>
                <li><a href="/">About</a></li>
                <li><a href="/">Telemetry</a></li>
                <li><a href="/">Roadmap</a></li>
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Support</a></li>
                <li><a href="/">Build</a></li>
                <li><a href="/">Grants and Bounties</a></li>
                <li><a href="/">Careers</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-6 what-we-do">
              <ul>
                <div className="headering">
                  <h5>Technology</h5>
                </div>
                <li><a href="/">Technology</a></li>
                <li><a href="/">Staking</a></li>
                <li><a href="/">XCM</a></li>
                <li><a href="/">Parachains</a></li>
                <li><a href="/">Token</a></li>
                <li><a href="/">Substrate</a></li>
                <li><a href="/">Lightpaper</a></li>
                <li><a href="/">Whitepaper</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-6 how-we-do">
              <ul>
                <div className="headering">
                  <h5>Community</h5>
                </div>
                <li><a href="/">Community</a></li>
                <li><a href="/">Academy</a></li>
                <li><a href="/">Auctions</a></li>
                <li><a href="/">Treasury</a></li>
                <li><a href="/">Documentation</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Brand Assets</a></li>
                <li><a href="/">Element Chat</a></li>
                <li><a href="/">Medium</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-12">
              <div className="footer-social-icons">
                <a href="/" className="p-2 fs-4 text-white"><BsTwitter /></a>
                <a href="/" className="p-2 fs-4 text-white"><FaRedditAlien /></a>
                <a href="/" className="p-2 fs-4 text-white"><BsGithub /></a>
                <a href="/" className="p-2 fs-4 text-white"><AiFillYoutube /></a>
                <a href="/" className="p-2 fs-4 text-white"><FaDiscord /></a>
              </div>
              <p className="text-white mt-4">Subscribe to the newsletter to hear about Polkadot updates and events.</p>
              <button class="btn btn-subscribe text-white d-block mb-1">Subscribe</button>
            </div>
          </div>
        <div className="footer-below-section pt-5" >
          <div className="row">
            <div className="col-md-2 col-12">
              <div className="footer-logo">
                <img
                  src="https://polkadot.network/assets/img/logo-polkadot-light.svg?v=ea608e625d"
                  className="img-fluid"
                  alt="footer logo"
                />
              </div>
            </div>
            <div className="col-md-10 col-12">
              <div class="footer-menu d-flex d-flex justify-content-between mb-3">
                <ul class="list-unstyled d-flex flex-wrap list-pipe-separator">
                  <li>
                    <span class="text-small px-1 text-white mr-1">©
                      2022 <a href="/" class="text-white" target="_blank" rel="">Web3 Foundation</a> |</span>
                  </li>
                  <li><span class="text-small px-1 text-white mr-1"><a href="/">Impressum</a> |</span></li>
                  <li><span class="text-small px-1 text-white mr-1"><a href="/">Disclaimer</a> |</span></li>
                  <li><span class="text-small px-1 text-white mr-1"><a href="/">Privacy</a></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
