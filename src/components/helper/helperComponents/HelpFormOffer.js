import React, { useState } from 'react'


const HelpFormOffer = (props) => {

    const [choiceState, setChoice] = useState({
        water: null,
        food: null,
        hygiene: null
    });
    if (choiceState.water) {
        console.log("WATER")
    }

    const choiceHandler = (props) => {
        setChoice({
            water: true,
            food: false,
            hygiene: true
        })
        console.log(choiceState)
    };
    


    return (
        <div>
            <div>
                <label>Water</label>
                <input
                    type="checkbox"
                    name=""
                    id="water"
                    onChange={choiceHandler}/>
            </div>
            <div>
                <label>Food</label>
                <input
                    type="checkbox"
                    name=""
                    id="food"/>
            </div>
            <div>
                <label>Hygiene</label>
                <input
                    type="checkbox"
                    name=""
                    id="hygiene"/>
            </div>
        </div>
    )
}

export default HelpFormOffer;
