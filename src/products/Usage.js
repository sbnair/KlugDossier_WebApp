import React from 'react';
export default () => (

  <div className="container">
    
    <h2><b>Data Feed and Oracles</b></h2>

    <div className="content">

    <p>PolkaDossier’s Oracle node will be created to collect data from different producers (data providers) and validate it based on the request provided by consumers.</p>

    <p>A Reward and Fine Mechanism is provided in Oracle node.</p>
    
    <p>Reward for the producers if the validation is successfully based on Consumer’s request and Fine/penalty for the producers if the validation is a failure.</p>

    <p>Input data feed can be from Excel file or from an API supporting json structure. A producer (if needed) can manipulate or apply logic on the uploaded data using WASM contracts to make the format compatible.</p>

    <p>Data can be received in consumer side using smart contracts or with non-smart contract apps like legacy IT systems based on the adapter available from PolkaDossier.</p>
    
    </div>

    <div>
        <img src={require('./PolkaDossierOffchain.png')} alt="" />
    </div>
  
    

  </div>
);
