import React from 'react'


const HelpList = (props) => {
    return (
        <div>
            <form>
                <select name="dropdown">
                    <option value="Data Structures" selected>Data Structures</option>
                    <option value="Data Mining">Data Mining</option>
                </select>
                <input type="radio" />
                <input type="radio" />
                <input type="radio" />

            </form>
        </div>
    )
}

export default HelpList;
