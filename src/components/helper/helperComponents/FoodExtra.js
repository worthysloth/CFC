import React, { useState } from 'react'

const FoodExtra = (props) => {

    const [foodState, setFood] = useState({
        canned: false,
        vegetables: false,
        
    });

    return (
        <div>
            <h2>Please select the type of food you can offer:</h2>
            
        </div>
    );
};

export default FoodExtra;
