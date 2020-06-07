import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* Helper Components Import */
import GeoLocation from "./helperComponents/GeoLocation";



class helpFirstPage extends Component {

    state = {
        checked: [
            { water: false },
            { food: false },
            { hygiene: false }
        ]
    }
    
    render() {
        return (
            <div>
                <h1>Help First Page</h1>
                <GeoLocation />
            </div>
        )
    }
}

export default helpFirstPage;