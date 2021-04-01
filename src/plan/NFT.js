import React from 'react';
export default () => (

      <div className="container">
        <h2>NFT Use Case</h2>
        <p>Consumers input the details of the images they need e.g. Sport stars, Game characters, male, female, with/without etc.</p>
        <p>Consumer inputs are given to the validators to verify and clarify with the consumer (if needed).</p>
        <p>Validator (if all the inputs are good enough) then NFT data will be forwarded to PolkaDossier Oracle Node which contains Crypto Punk image generation based on the consumer inputs.</p>
        <p>Crypto images generated will be given back to the consumer.</p>
        <p>If consumer is satisfied then the necessary fees will be paid, otherwise it will be passed to validators.</p>
        <p>Validators after making necessary changes in model generation will be added again to PolkaDossier Oracle node and then the same loop will get continued.</p>
        <img src={require('./NFTUseCase.png')} alt="" />
      </div>
    );
