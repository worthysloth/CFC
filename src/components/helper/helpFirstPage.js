import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import GeoLocation from "./helperComponents/GeoLocation"

class helpFirstPage extends Component {

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