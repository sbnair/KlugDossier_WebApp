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
      
        <h2 className="text-left">Contact US</h2>
      
       <div className="container">
         
        <div className="content">   
          <p>Email: team@polkadossier.com</p>

          <p>Phone: </p>

          <p>Address: </p>

          <p></p>
  
          <p></p>
    
           <p></p> 

          </div> 

        </div>
     
    </section>
  </div>  

    );
  }
}

export default Contact;
