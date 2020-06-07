import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/* Component Import */
import GeoLocation from "./helperComponents/GeoLocation"
import CustomHelpList from "./helperComponents/CustomHelpList"


class helpFirstPage extends Component {

    render() {
        return (
            <div>
                <h1>Help First Page</h1>
                <GeoLocation />
                <CustomHelpList>Water</CustomHelpList>
            </div>
        )
    }
}

export default helpFirstPage;