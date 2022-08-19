import React from 'react'
import {AffairType} from './HW2'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: Array<AffairType> // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {}// need to fix
    return (
        <div>
            // show some tex
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
