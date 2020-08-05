import React, {forwardRef} from 'react';
import * as _ from 'lodash';
import '../../../scss/components/components/home.scss'


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
       }
    }

    render() {
        const {isLoaded} = this.state;
        return (
            <div className="home">
                <p> hello from Home</p>     
            </div>
        )
    }
}


