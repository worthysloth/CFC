import React, { useState } from 'react'

const WaterExtra = (props) => {

    const [selectedState, setSelected] = useState({choice: "ten-twenty"})

    const selectionHandler = (event) => {
        setSelected({choice: event.target.value})
        console.log(selectedState.choice)
        };



    return (
        <div>
            <h2>Please select the quantity of water you can offer:</h2>
            <form>
                <select name="water-qty" id="water-qty" value={selectedState.choice} onChange={selectionHandler}>
                    <option value="less-ten">10L or less</option>
                    <option value="ten-twenty">Between 10L and 20L</option>
                    <option value="more-twenty">More than 20L</option>
                </select>
            </form>
        </div>
    )
}

export default WaterExtra;
