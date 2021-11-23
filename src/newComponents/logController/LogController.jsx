import React, { useEffect, useState } from "react";
import LabelApp from "../LabelApp";
import Login from "./Login";

import Logup from "./Logup";

import '../styles/logController.css';
import btoa from "btoa";
import isAccountExist from "../../requests/isAccountExist";
import registration from "../../requests/posts/registartion";

function LogController({ SetIsAccountExist, accountId }) {

    useEffect(async () => {

        const isExist = await isAccountExist(accountId);

        SetIsAccountExist(true);
        if (isExist) {
            return;
        }

        const status = await registration(accountId)

        if (status === 201) {
            SetIsAccountExist(true);
        }
        
    }, []);

    return (
        <div>

        </div>
    )
}

export default LogController;