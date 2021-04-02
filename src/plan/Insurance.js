import React from 'react';
export default () => (

      <div className="container">
        <h2>Insurance Use Case</h2>
        <div className="content">
        <p>Reinsurance consumers which are insurance providers/sellers can approach PolkaDossier to insure their policies sold to consumer base. In the event of large claims they can also benefit from the Reinsurance, using PolkaDossier Oracle insurance whereby the sellers can collect sufficient documents from different data sources in a time efficient manner.</p>
        <p>On-Demand Insurance Providers can sell the insurance on-demand and keep track of policies through PolkaDossier Smart Contracts and can predict the risks based on data collected and made available from multiple sources.</p>
        <p>Micro insurance Providers can sell in very small policies for a large community and also predict risks within that community based on data collected by PolkaDossier.</p>
        <p>When a consumer approaches Insurance Provider with a claim any type of Insurance Provider can collect Satellite Images, Weather data, Drone Images, other Insurance Dependent Data from social networks and can verify the validity of the claim, making the process much faster and transparent.</p>
        </div>
        <img src={require('./InsuranceUseCase.png')} alt="" />
      </div>
    );
