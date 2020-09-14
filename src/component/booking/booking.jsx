import React from "react";

export class Booking extends React.Component {
  render() {
    return (
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <i className="fa fa-plane fa-2x" aria-hidden="true"  />
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Flights </button>
            </h5>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="card-body">14 Feb - Flight XX123 - SIN to NYC</div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <i className="fa fa-user fa-2x" aria-hidden="true"  />
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Passengers </button>
            </h5>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div className="card-body">Doe, Jane</div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingFour">
            <h5 className="mb-0">
              <i className="fa fa-ticket fa-2x" aria-hidden="true"  />
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> Tickets </button>
            </h5>
          </div>
          <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
            <div className="card-body">Ticket #123-123456789 </div>
          </div>
        </div>      </div>

    );
  }
}
