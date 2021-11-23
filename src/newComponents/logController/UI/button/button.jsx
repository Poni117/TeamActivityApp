import React from "react";

import classeses from './button.module.css';

function Button({children, ...props}){
    
    return (
        <button {...props} className={classeses.Button}>{children}</button>
    )
}

export default Button;