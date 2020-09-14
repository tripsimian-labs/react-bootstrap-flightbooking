import React from "react";

export class Search extends React.Component {
  render() {
    return (
      <div className="card shadow mb-5 bg-white rounded">
        <div className="card-body">
          <div className="icons text-center">
            <i className="fa fa-plane fa-2x" aria-hidden="true" />
            <i className="fa fa-taxi fa-2x" aria-hidden="true" />
            <i className="fa fa-train fa-2x" aria-hidden="true" />
          </div>
          <hr />
          <p className="searchText">
            <strong>Search For Cheap Flights</strong>
          </p>

          <div className="row mb-3 mt-3">
            
            <label className="radiobtn">
              <input type="radio" name="searchType" value="OW" /> One Way
            </label>
            <label className="radiobtn">
              <input type="radio" name="searchType" value="RT" /> Round Trip
            </label>
          </div>

          <div className="row">
            <div className="col-sm-6">
              
              <select
                className="browser-default custom-select mb-4"
                id="select" >
                <option value="" disabled="" selected="">
                  From City/Airport
                </option>
                <option value="1">New Delhi</option>
                <option value="2">Mumbai</option>
                <option value="3">Bangalore</option>
              </select>
            </div>
            <div className="col-sm-6">
              
              <select
                className="browser-default custom-select mb-4"
                id="select" >
                <option value="" disabled="" selected="">
                  To City/Airport
                </option>
                <option value="1">New Delhi</option>
                <option value="2">Mumbai</option>
                <option value="3">Bangalore</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <i className="fa fa-calendar" aria-hidden="true" />
              <input
                placeholder="Departing"
                type="text"
                id="date-picker-example"
                className="form-control datepicker mb-4 customDatePicker" />
            </div>
            <div className="col-sm-6">
              
              <i className="fa fa-calendar" aria-hidden="true" />
              <input
                placeholder="Arriving "
                type="text"
                id="date-picker-example"
                className="form-control datepicker customDatePicker" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              
              <select
                className="browser-default custom-select mb-4"
                id="select" >
                <option value="" disabled="" selected="">Passengers</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <a href="#" className="btn btn-info float-right mt-5">
            Find Flights
          </a>
        </div>
      </div>
    );
  }
}
