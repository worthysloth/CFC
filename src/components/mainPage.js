import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class mainPage extends Component {
    render() {
        return (
            <div>
                <Link to="/victims">
                <button>Victims</button>
                </Link>
                <Link to="/help">
                <button>Helpers</button>
                </Link>
            </div>
        )
    }
}
