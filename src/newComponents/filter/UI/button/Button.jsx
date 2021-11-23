import React from 'react'

import classeses from './Button.module.css';

function Button({isDisabled}){

    return (
       
        <button id={classeses.Button} className="card-text" disabled={isDisabled}>FILTER</button>
    )
}


export default Button;