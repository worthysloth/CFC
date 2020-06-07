import React from 'react'

const WaterExtra = () => {

    return (
        <div>
            <select name="water-qty" id="water-qty">
                <option value="less-ten">10L or less</option>
                <option selected value="ten-twenty">Between 10L and 20L</option>
                <option value="more-twenty">More than 20L</option>
            </select>
        </div>
    )
}

export default WaterExtra;
