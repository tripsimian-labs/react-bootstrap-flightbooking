import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class BreadcrumbnMenu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <ul className="breadcrumb">
			      <li className="nav-item active"><Link to="/">Search</Link> </li> 
            <li className="nav-item"><Link to="/flightlist">FlightList</Link> </li> 
            <li className="nav-item"><Link to="/passengerlist">PassengerList</Link> </li> 
            <li className="nav-item"><Link to="/checkout">Checkout</Link> </li> 
            <li className="nav-item"><Link to="/booking">Summary</Link> </li>
          </ul>
      </nav>
    );
  }
}
