import React, { useState } from 'react'

/* toothbrush: null,
toothpaste: null,
toiletPaper: null,
desinfectant: null,
soap: null,
tissues: null,
sanitaryPad: null */

const HygExtra = () => {

    const [toothbrushState, setToothbrush] = useState({
    /* Do it like the resourceSelection!! */

    })

    const checkBoxHandler = (id) => {
        switch (id) {
            case "toothbrush":
                setHygiene({ ...{toothbrush: !hygieneState.toothbrush} })
                console.log(hygieneState)
        }
    }

    return (
        <div>
            <label>Toothbrush
            <input type="checkbox" id="toothbrush" onClick={() => checkBoxHandler("toothbrush")} />
            </label>
        </div>
    )
}

export default HygExtra
