import React, { useEffect, useState } from 'react'
import btoa from 'btoa'
import LogInput from './UI/input/LogInput';
import Button from './UI/button/button';
import Alert from './UI/alert/Alert';
import LinkButton from './UI/linkButton/LinkButton';
import isAccountExist from '../../requests/isAccountExist';

import '../styles/Login.css';

function Login({setIsAccountExist, setLogState}){


    const[buttonBody, setButtonBody] = useState(<span>Log in</span>);

    const[isAlertExist, setIsAlertExist] = useState(false);

    const[loginData, setLoginData] = useState({email: localStorage.getItem('email'), password: localStorage.getItem('password')});

    function SetLoginData(data){

        if (data.type === 'email') {
            setLoginData({...loginData, email: data.value})
            return;
        }

        setLoginData({...loginData, password: data.value})

        // setLoginData(loginData)
    }

    useEffect(() => {

        if(loginData.email === null ||  loginData.password === null){
            return;
        }

        Submit();
    }, []);

    async function Submit(event){

        
        if(event !== undefined){
            event.preventDefault();
        }
        
        setButtonBody(
            <div id="glyphicon glyphicon-refresh glyphicon-refresh-animate">
                <span>Loading...</span>
            </div>
        )

        const isExist = await isAccountExist(btoa(`${loginData.email}:${loginData.password}`));

        setIsAccountExist(isExist); 

        if (isExist) {
            localStorage.setItem("email", loginData.email)
            localStorage.setItem("password", loginData.password)
            localStorage.setItem("basicToken", btoa(`${loginData.email}:${loginData.password}`));

            return;
        }

        setIsAlertExist(true);
        
        setButtonBody(<span>Log in</span>)
    }

 
    return (

        <form id="login-form" onSubmit={Submit}>

            <div id="alert-container">
                <Alert isAlertExist={isAlertExist}/>
            </div>

            <LogInput setLogData={SetLoginData} icon='fas fa-user' type='email' placeholder='email'  defaultValue={loginData.email}/>
            
            <LogInput setLogData={SetLoginData} icon='fas fa-lock' type='password' placeholder='Password'  defaultValue={loginData.password}/>

            <LinkButton setLogState={setLogState}>registration</LinkButton>

            <Button>{buttonBody}</Button>

        </form>
    )
}

export default Login;
