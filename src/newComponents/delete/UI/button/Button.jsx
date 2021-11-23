import React, { useEffect, useState } from "react";

import classeses from './Button.module.css';

function Button({isClicked, children}){

    return(
            <button style={{display: 'none'}} type='checkbox' onClick={e => isClicked(e.target.checked)}>{children}</button>
    )
}

export default Button;