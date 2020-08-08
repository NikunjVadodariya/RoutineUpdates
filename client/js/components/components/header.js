import React from 'react';
import {Route, withRouter, Switch, Link} from "react-router-dom";
require('es6-promise').polyfill();
import '../../../scss/components/components/header.scss'


export default class Header extends React.Component {
    constructor(props) {
        super(props);
}
    render() {
        return(
            <div class ="header"> 
                <input type="checkbox"  class="toggler" />
                <div class="hamburger">
                    <div></div>
                </div>
                <div class="menu">
                    <div>
                        <div>
                            <ul>
                                <li><Link to="/" class="link">Home</Link></li>
                                <li><Link to="/users" class="link">About Us</Link></li>
                                <li><Link to="/users" class="link">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-text">
                    Daily Routines
                </div>
                <div class="horizontal-menu">
                    <ul>
                        <li><Link to="/" class="link">Home</Link></li>
                        <li><Link to="/users" class="link">About Us</Link></li>
                        <li><Link to="/users" class="link">Contact Us</Link></li>
                    </ul>
                </div>
                <div class="logo">
                    <ion-icon name="logo-firefox"></ion-icon>
                </div> 
            </div>


    );
  }

}