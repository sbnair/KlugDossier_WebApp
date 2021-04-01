import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      
      //var email = this.props.data.email;
      //var message = "Contact";//this.props.data.contactmessage;
    }

    return (
<div className="main-page plan">      
  <section>    
      <div className="my-10">
        <h1 className="text-left">Contact US</h1>
      </div>
       <div className="container">
           
          <p>Email: team@polkadossier.com</p>

          <p>Phone: </p>

          <p>Address</p>

          <p></p>
  
          <p></p>
    
           <p></p> 

        </div>
     
    </section>
  </div>  
    );
  }
}

export default Contact;
