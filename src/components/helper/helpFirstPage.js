import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/* Helper Components Import */
import GeoLocation from "./helperComponents/GeoLocation";
import ResourceSelection from "./helperComponents/ResourceSelection"

class helpFirstPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <h1>Help First Page</h1>
                <form>
                    <GeoLocation />
                    <ResourceSelection />
                    <input type="submit" name="" id=""/>
                </form>
            </div>
        )
    }
}

export default helpFirstPage;