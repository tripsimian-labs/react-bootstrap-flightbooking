import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class NavigationMenu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#"><i className="fa fa-cloud"></i></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
			      <li className="nav-item active"><Link to="/">Search</Link> </li> 
            <li className="nav-item"><Link to="/flightlist">FlightList</Link> </li> 
            <li className="nav-item"><Link to="/passengerlist">PassengerList</Link> </li> 
            <li className="nav-item"><Link to="/checkout">Checkout</Link> </li> 
            <li className="nav-item"><Link to="/booking">Summary</Link> </li>
          </ul>
          <form className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}
