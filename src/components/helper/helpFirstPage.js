import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GeoLocation from "./helperComponents/GeoLocation"
import HelpFormOffer from "./helperComponents/HelpFormOffer"


class helpFirstPage extends Component {

    render() {
        return (
            <div>
                <h1>Help First Page</h1>
                <GeoLocation />
                <HelpFormOffer />
            </div>
        )
    }
}

export default helpFirstPage;