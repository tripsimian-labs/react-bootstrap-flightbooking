import React from "react";
import Flight from "../common/flight";

export class FlightList extends React.Component {
  render() {
    return (
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                14 Feb - Flight XX123 - SIN to NYC
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse show"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div className="card-body">Class: Economy</div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                19 Feb - Flight XX456 - NYC to SIN
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body">Class: Economy</div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingFour">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <div className="row align-items-center">
                <div className="col-sm-9">
                  <div className="row align-items-center">
                    <div className="col-3 text-center">
                      <div className="card-title">12:00</div>
                      <div className="card-subtitle mt-2 text-muted">SIN</div>
                    </div>
                    <div className="col-6 text-center align-self-center">
                      <div className="row align-items-center justify-content-center"> 
                        <div className="col-1" />
                      </div>
                      <div className="row align-items-center">
                        <div className="col p-0">
                          <hr />
                        </div>
                        <div className="col-auto p-0">
                          <div />
                        </div>
                        <div className="col p-0">
                          <hr />
                        </div>
                        <div className="col-auto">
                          <i className="fa fa-plane fa-2x" aria-hidden="true"  />
                        </div>
                      </div>
                      <div>
                        <div className="col">
                          <p className="m-0">
                            <small>0</small>
                          </p>
                        </div>
                        <div className="col-1" />
                      </div>
                      <div className="row align-items-center justify-content-center">
                        <div className="col">
                          <p className="m-0">
                            <small>flightTime 1hr</small>
                          </p>
                          <p className="m-0">
                            <small>Direct</small>
                          </p>
                        </div>
                        <div className="col-1" />
                      </div>
                    </div>
                    <div className="col-3 text-center">
                      <div className="card-title">13:00</div>
                      <div className="card-subtitle mt-2 text-muted">KUL</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 text-center">
                  <div className="card-text mb-3">SG$100</div>
                </div>
              </div>
            </button>
            <button href="#" className="btn btn-primary">
              Select
            </button>
          </div>
          <div
            id="collapseFour"
            className="collapse"
            aria-labelledby="headingFour"
            data-parent="#accordion"
          >
            <div className="card-body">
              <div>
                <table cellpadding="10">
                  <tr>
                    <td align="center">
                      <img
                        className="airline-icon"
                        src="https://www.skyscanner.net/images/airlines/favicon/SQ.png"
                      />
                    </td>
                    <td colspan="2">SQ 123</td>
                    <td rowspan="2" width="5%" align="center">
                      <div className="offer-leg-circles">
                        <div className="offer-leg" />
                      </div>
                    </td>
                    <td width="10%">12:00</td>
                    <td>KUL</td>
                    <td>13:00</td>
                    <td>SIN</td>
                  </tr>
                </table>
              </div>              
              <div>
                <table cellpadding="10">
                  <tr>
                    <td align="center">
                      <img
                        className="airline-icon"
                        src="https://www.skyscanner.net/images/airlines/favicon/SQ.png"
                      />
                    </td>
                    <td colspan="2">SQ 456</td>
                    <td rowspan="2" width="5%" align="center">
                      <div className="offer-leg-circles">
                        <div className="offer-leg" />
                      </div>
                    </td>
                    <td width="10%">12:00</td>
                    <td>SIN</td>
                    <td>13:00</td>
                    <td>KUL</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
