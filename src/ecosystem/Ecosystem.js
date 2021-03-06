import React from 'react';
import './Ecosystem.css';
import Section1 from './Overview';
import Section2 from './PainPoint';

const Ecosystem = () => (
  <div className="main-page ecosystem section">
    <section>
      <Section1 />
    </section>
    <section>
      <Section2 />
    </section>
  </div>
);

export default Ecosystem;
