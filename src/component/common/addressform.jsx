import React from "react";
import {CountryList} from "./countrylist";

export class AddressForm extends React.Component {
  render() {
    return (
      <div className="row">
        <form className="form-horizontal">
                <fieldset>
                    <h2>Address</h2>
                    <div className="control-group">
                        <label className="control-label">Full Name</label>
                        <div className="controls">
                            <input id="full-name" name="full-name" type="text" placeholder="full name"
                            className="input-xlarge"/>
                            <p className="help-block"></p>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label">Address Line 1</label>
                        <div className="controls">
                            <input id="address-line1" name="address-line1" type="text" placeholder="address line 1"
                            className="input-xlarge"/>
                            <p className="help-block">Street address, P.O. box, company name, c/o</p>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label">Address Line 2</label>
                        <div className="controls">
                            <input id="address-line2" name="address-line2" type="text" placeholder="address line 2"
                            className="input-xlarge"/>
                            <p className="help-block">Apartment, suite , unit, building, floor, etc.</p>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label">City / Town</label>
                        <div className="controls">
                            <input id="city" name="city" type="text" placeholder="city" className="input-xlarge"/>
                            <p className="help-block"></p>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label">State / Province / Region</label>
                        <div className="controls">
                            <input id="region" name="region" type="text" placeholder="state / province / region"
                            className="input-xlarge"/>
                            <p className="help-block"></p>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label">Zip / Postal Code</label>
                        <div className="controls">
                            <input id="postal-code" name="postal-code" type="text" placeholder="zip or postal code"
                            className="input-xlarge"/>
                            <p className="help-block"></p>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label">Country</label>
                        <div className="controls">
                            <input list="countrylist" id="country" name="country" className="input-xlarge"/>
                            <CountryList/>
                        </div>
                    </div>
                </fieldset>
            </form>
      </div>
     );
  }
}
