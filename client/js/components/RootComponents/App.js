import React from 'react';
import {Route, withRouter, Switch, Link} from "react-router-dom";
import Header from '../components/header.js'
import Home from '../components/Home.js'
require('es6-promise').polyfill();
import '../../../scss/components/rootcomponents/app.scss'
import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          open: false
        }
}

revertOpen(){
  this.setState({ open: !this.state.open  });
};
  // this.props.history.push("/home")
    render() {
        return(
  <div class="app">

    <Header />

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route  path="/about" render={(props) => (<About {...props} />)} />
            <Route  path="/contact_us" render={(props) => (<Users {...props} />)} />
            <Route  path="/" render={(props) => (<Home {...props} />)} />
          </Switch>

        </div>

    );
  }

}

export default withRouter(App);

const About = () => <button class="back" onClick={() => this.goBack()}>Back</button>;
const Users = () => <h2>Users</h2>;