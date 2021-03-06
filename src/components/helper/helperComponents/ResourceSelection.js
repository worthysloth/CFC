import React, { useState } from 'react'
import WaterExtra from "./WaterExtra"
import FoodExtra from "./FoodExtra"
import HygExtra from "./HygExtra"


const ResourceSelection = (props) => {

    const [waterState, setWaterState] = useState({ checked: false })
    const [foodState, setFoodState] = useState({ checked: false })
    const [hygieneState, setHygieneState] = useState({ checked: false });

    const checkboxHandler = (id) => {
        switch (id) {
            case "water":
                setWaterState({ checked: !waterState.checked })
                break;
            case "food":
                setFoodState({ checked: !foodState.checked })
                break;
            case "hygiene":
                setHygieneState({ checked: !hygieneState.checked })
                break;
            default:
                break;
        }
    };

    let waterContent = null;
    let foodContent = null;
    let hygieneContent = null;

    if (waterState.checked) {
        waterContent = <WaterExtra/>
    }
    if (foodState.checked) {
        foodContent = <FoodExtra/>
    }
    if (hygieneState.checked) {
        hygieneContent = <HygExtra/>
    }

    return (
        <div>
            <div>
                <label>Water
            <input type="checkbox" id="water" onClick={() => checkboxHandler("water")} />
                </label>
            </div>
            <div>
                <label>Food
            <input type="checkbox" id="food" onClick={() => checkboxHandler("food")} />
                </label>
            </div>
            <div>
                <label>Hygiene
            <input type="checkbox" id="hygiene" onClick={() => checkboxHandler("hygiene")} />
                </label>
            </div>
            {waterContent}
            {foodContent}
            {hygieneContent}
        </div>
    );
};
export default ResourceSelection;
