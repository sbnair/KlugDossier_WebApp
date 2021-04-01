import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      
      //var email = this.props.data.email;
      var message = "Contact";//this.props.data.contactmessage;
    }

    return (
<div className="main-page plan">      
  <section>    
   <div className="my-10">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-10 col-15 mx-19">
            <form>
              <div class="form-group mb-6">
                <label>Name   </label>
                <label>   </label>
                <input
                  type="text"
                  
                  id="exampleFormControlInput1"
                  placeholder="Enter your name" 
                />
              </div>
              <div class="form-group mb-3">
                <label for="exampleFormControlInput1">Phone</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Phone number"
                />
              </div>
              <div class="form-group mb-3">
                <label for="exampleFormControlInput1">Email </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Email"
                />
              </div>
              <div class="form-group mb-3">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button class="btn btn-outline-primary mb-3" type="submit">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>  
    );
  }
}

export default Contact;
