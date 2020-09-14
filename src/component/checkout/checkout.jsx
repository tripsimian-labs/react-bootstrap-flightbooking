import React from "react";

import AddressForm from "../common/addressform";

export class Checkout extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="row">
            <div className="col-xs-12 col-md-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title"> Payment Details </h3>
                    </div>
                    <div className="panel-body">
                        <form role="form">
                        <div className="form-group">
                            <label for="cardNumber"> CARD NUMBER</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="cardNumber" placeholder="XXXX-XXXX-XXXX-XXXX"
                                    required autofocus />
                                <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-7 col-md-7">
                                <div className="form-group">
                                    <label for="expityMonth"> EXPIRY DATE</label>
                                    <div className="col-xs-6 col-lg-6 pl-ziro">
                                        <input type="text" className="form-control" id="expityMonth" placeholder="MM" required />
                                    </div>
                                    <div className="col-xs-6 col-lg-6 pl-ziro">
                                        <input type="text" className="form-control" id="expityYear" placeholder="YY" required /></div>
                                </div>
                            </div>
                            <div className="col-xs-5 col-md-5 pull-right">
                                <div className="form-group">
                                    <label for="cvCode">CVV CODE</label>
                                    <input type="password" className="form-control" id="cvCode" placeholder="CVV" required />
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                <div className="checkbox pull-right">
                  <label><input type="checkbox" /> Remember </label>
                </div>
                <br/>
                <a href="#" className="btn btn-info btn-lg btn-block" role="button">Pay</a>
            </div>
        </div>
      
    </div>
    );
  }
}
