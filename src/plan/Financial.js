import React from 'react';
export default () => (

      <div className="container">
        <h2>Financial Use Case</h2>
        <p>Consumers request Equity Analyst to enter the requirements using PolkaDossier Web UI.</p>
        <p>Based on the requirement of the consumers, Web app requests data from the data providers.</p>
        <p>PolkaDossier Oracle node fetch the trading data and validates it using Validators Appointed based on Proof of stake.</p>
        <p>AI models based on Consumer requirement has been selected to apply on top of the data for validation.</p>
        <p>Strict confidentiality terms applicable to the communication from Data Owners to Data Consumers using Zero-Knowledge Protocol.</p>
        <p>Smart contracts can be used to filter data of the Data owners and then given to AI models.</p>
        <p>Predicted Accuracy generated from AI models are passed on to equity Analyst. In the event that they are satisfied it is then passed on to stakeholder and/or Validator and then Validators, who then checks the models used and requests any changes to the PolkaDossier team (if required).</p>
        <img src={require('./FinancialUseCase.png')} alt="" />
      </div>
    );
