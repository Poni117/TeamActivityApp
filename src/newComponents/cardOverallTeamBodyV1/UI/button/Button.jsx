import { color } from "d3-color";
import React, { useEffect, useMemo, useState } from "react";

import './Button.module.css';

function Button({setCursorZone, isPointerExist, name, color}){


    const pointer = useMemo(() => {

        if(isPointerExist){
            return '0px 0px 4px 0px';
        }

        return '0px 0px 2px 0px';
    }, [isPointerExist]);

    function OnClick(event){
        setCursorZone(event.target.name);
    }

    return (
        <div className='colors-information'>
            <label className="pointer-label">
                <svg className='colors' style={{boxShadow: pointer, backgroundColor: color}}></svg>
                <button className="card-overall-btn" name={name} onClick={OnClick} />
            </label>
            <span className="card-text">{name}</span>
        </div>
    )
}

export default Button;