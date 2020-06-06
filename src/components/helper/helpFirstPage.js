import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GeoLocation from "./helperComponents/GeoLocation"
import HelpListInput from "./helperComponents/HelpListInput"


class helpFirstPage extends Component {

    render() {
        return (
            <div>
                <h1>Help First Page</h1>
                <GeoLocation />
                <form>
                    <HelpListInput />
                </form>

            </div>
        )
    }
}

export default helpFirstPage;