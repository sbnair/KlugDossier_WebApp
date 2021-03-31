import React from 'react';

export default () => (
  <div className="container">
    <h2>Vision and Mission</h2>
    <div className="row">
      <div className="col-md-12">
        <p>POLKA DOSSIER IN A NUT SHELL.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <p>PolkaDossier strives to solve problems that many firms are facing with respect to raw
data especially in the form of fetching clear and refined data needed for complex
businesses like Algo trading, predictive analysis, cognitive analysis and other businesses
that depend on data heavily.</p>

        <p>PolkaDossier does not solely target solving complex problems, rather it also aims to
solve normal wants from consumers like generating NFTs, fetching validated data from
data providers and also links with existing Polkadot ecosystem so that it won’t have
competitors, but it can partner with other products using Polkadot technology to achieve
its aim and facilitate all its users.</p>

      </div>
      <div className="col-md-6">
       <div className="video">
        <video autoPlay controls>
          <source src={require('./video.mp4')} type="video/mp4" />
        </video>
       </div> 
      </div>
    </div>
  </div>
);
