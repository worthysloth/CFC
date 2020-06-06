import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import AddResources from './helperComponents/addResources'

export default class helpFirstPage extends Component {
    render() {
        return (
            <div>
                <h1>Help First Page</h1>
                <AddResources />
            </div>
        )
    }
}
