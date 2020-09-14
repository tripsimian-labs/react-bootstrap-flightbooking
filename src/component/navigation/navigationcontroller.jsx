import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Search } from "../search/search";
import { FlightList } from "../flight/flightlist";
import { PassengerList } from "../passenger/passengerlist";
import { Checkout } from "../checkout/checkout";
import { Booking } from "../booking/booking";

export class NavigationController extends React.Component {
  /* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */
  render() {
    return (
      <Switch>
        <Route path="/flightlist"><FlightList /></Route>
        <Route path="/passengerlist"><PassengerList /></Route>
        <Route path="/booking"><Booking /></Route>
        <Route path="/checkout"><Checkout /></Route>
        <Route path="/"><Search /></Route>
      </Switch>
    );
  }
}
