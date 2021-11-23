import React from "react";

import classeses from './Button.module.css';

function Button({set, children}){

    return (
        <button id={classeses.Button} onClick={e => set(children)}>{children}</button>
    )
}

export default Button;