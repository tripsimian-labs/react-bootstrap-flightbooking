import React from "react";

export class Passenger extends React.Component {
  render() {
    return 	(
		    <div className="card">
		        <div className="card-body">
		            <div className="row">
		                <div className="col-md-12">
		                    <h4>Your Profile</h4>
		                    <hr/>
		                </div>
		            </div>
		            <div className="row">
		                <div className="col-md-12">
		                    <form>
                              <div className="form-group row">
                                <label for="name" className="col-4 col-form-label">First Name</label> 
                                <div className="col-8">
                                  <input id="name" name="name" placeholder="First Name" className="form-control here" type="text"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label for="lastname" className="col-4 col-form-label">Last Name</label> 
                                <div className="col-8">
                                  <input id="lastname" name="lastname" placeholder="Last Name" className="form-control here" type="text"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label for="text" className="col-4 col-form-label">Contact Number*</label> 
                                <div className="col-8">
                                  <input id="text" name="text" placeholder="Contact Number" className="form-control here" required="required" type="text"/>
                                </div>
                              </div>

                              <div className="form-group row">
                                <label for="email" className="col-4 col-form-label">Email*</label> 
                                <div className="col-8">
                                  <input id="email" name="email" placeholder="Email" className="form-control here" required="required" type="text"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-4 col-8">
                                  <button name="submit" type="submit" className="btn btn-primary">Update My Profile</button>
                                </div>
                              </div>
                            </form>
		                </div>
		            </div>
		            
		        </div>
		    </div>
    );
  }
}
