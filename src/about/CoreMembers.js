import React from 'react';


export default () => (
  <div className="container">
    <h3>Core Member</h3>
    <div className="row">
      <div className="col-md-6">
        <img src={require('./avatars/svg/boy-1.svg')} alt=""/>
        <h4>Waqas Khan</h4>
        <p>CEO & Co-founder</p>
        <p>Waqas is a finance graduate and is a fellow member of the Chartered Certified Accountant (United Kingdom) with over 13 years of experience in accounting and finance mainly in the asset management industry including 10 years with KPMG and PwC. He is currently servicing Tech and Crypto investment fund with an AUM of c. $ 4.5 billion.Waqas is a blockchain and crypto enthusiast and is invested in various projects since 2016. </p>
        <p>He is actively helping a variety of crypto projects with business development, financing & fundraising, marketing, and setting up crypto investment funds structures.</p>
      </div>
      <div className="col-md-6">
        <img src={require('./avatars/svg/boy-2.svg')} alt=""/>
        <h4>Shailesh B Nair</h4>
        <p>CTO & Co-founder</p>
        <p>Shailesh is a computer graduate from 2004 and has been developing softwares especially in areas like Data analytics, DeFi, Fintech , Blockchain including developing on Ethereum, Substrate, Polkadot, Cosmos for more than 18 years.</p>
        <p>His recent projects include developing various On-chain and Off-chain projects on Substrate/Polkadot using ink!, WASM contracts, deploying Smart Contracts into Parachain / Parathread using Cumulus, Zero-knowledge proof in Parachain, conversion of business logics and data into a uniform format and also developed DeFi / Data Analytics app connected to Polkadot relay chain.</p>
      </div>
     
    </div>
  </div>
);
