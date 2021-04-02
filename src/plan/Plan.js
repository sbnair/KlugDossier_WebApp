import React from 'react';
import Financial from './Financial';
import Insurance from './Insurance';
import NFT from './NFT';


const Plan = () => (
  <div className="main-page plan section">
    <section>
      <Financial/>
    </section>
    <section>
      <Insurance/>
    </section>
     <section>
      <NFT/>
    </section>
  </div>
);

export default Plan;
