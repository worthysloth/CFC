import React from 'react'

const customHelpList = (props) => {
    return (
        <div>
            <input type="checkbox">{props.children}</input>
        </div>
    )
}

export default customHelpList
