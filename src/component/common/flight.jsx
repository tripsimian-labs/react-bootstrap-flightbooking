import React from "react";

export class Flight extends React.Component {
  render() {
    return (
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-sm-9">
            <div className="row align-items-center">
              <div className="col-3 text-center">
                <h4 className="card-title">offer.segments[0].departureTime</h4>
                <h5 className="card-subtitle mb-2 text-muted">offer.segments[0].departureStation</h5>
              </div>
              <div className="col-6 text-center align-self-center">
                <div className="row align-items-center justify-content-center">
                  <div className="col">
                    <p className="m-0">
                      <small>flightTime(offer.journeyTime</small>
                    </p>
                  </div>
                  <div className="col-1"></div>
                </div>
                <div className="row align-items-center">
                  <div className="col p-0">
                    <hr/>
                  </div>
                  <div className="col-auto p-0">
                    <div ></div>
                  </div>
                  <div className="col p-0">
                    <hr/>
                  </div>
                  <div className="col-auto"><i className="fas fa-plane"></i></div>
                </div>
                <div>
                  <div className="col">
                    <p className="m-0">
                      <small>
                        numberOfStops(offer.segments).length
                      </small>
                    </p>
                  </div>
                  <div className="col-1"></div>
                </div>
                <div className="row align-items-center justify-content-center">
                  <div className="col">
                    <p className="m-0">
                      <small>Direct</small>
                    </p>
                  </div>
                  <div className="col-1"></div>
                </div>
              </div>
              <div className="col-3 text-center">
                <h4 className="card-title">offer.segments[offer.segments.length-1].arrivalTime</h4>
                <h5 className="card-subtitle mb-2 text-muted">offer.segments[offer.segments.length-1].arrivalStation</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-3 text-center">
            <h3 className="card-text mb-3">offer.price | currency:'EUR'</h3>
            <button href="#" className="btn btn-primary" >Select</button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div>
          <table cellpadding="10">
            <tr>
              <td align="center">
                <img src="https://www.skyscanner.net/images/airlines/favicon/SQ.png"/>
              </td>
              <td colspan="2">leg.airlineCode leg.flightNumber</td>
            </tr>
            <tr>
              <td rowspan="2" width="5%" align="center" >
                <div className="offer-leg-circles">
                  <div className="offer-leg"></div>
                </div>
              </td>
              <td width="10%">leg.departureTime</td>
              <td>leg.departureStation</td>
            </tr>
            <tr>
              <td>leg.arrivalTime</td>
              <td>leg.arrivalStation</td>
            </tr>
          </table>
        </div>
      </div>    
    );
  }
}
