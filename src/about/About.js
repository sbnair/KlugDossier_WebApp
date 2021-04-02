import React from 'react';
import './About.css';

import AboutText from './AboutText';
import CoreMember from './CoreMembers';
//import Advisors from './Advisors';
//import Partners from './Partners';

const OverviewCompany = () => (
  <div className="main-page overview_company">
   <div className="section team"> 
    <section className="about-text">
      <AboutText/>
    </section>
    <section className="people core-member">
      <CoreMember/>
    </section>
    </div>
   </div>
);

export default OverviewCompany;
