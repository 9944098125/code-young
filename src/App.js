import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import ProtectedRoute from './components/ProtectedRoute'
import Login from "./components/Login"
import SignUp from "./components/Signup"
import CurrencyConverter from "./components/CurrencyConverter"

function App() {
  return (<Router>
    <div className="App">
          <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <ProtectedRoute exact path='/' component={CurrencyConverter} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;