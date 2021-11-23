import btoa from 'btoa';
import { useState } from 'react';
import registration from '../../requests/posts/registartion';
import Button from './UI/button/button';
import LogInput from './UI/input/LogInput';
import LinkButton from './UI/linkButton/LinkButton';

function Logup({setIsAccountExist, setLogState}){

    const[buttonBody, setButtonBody] = useState(<span>Log up</span>);

    const[logupData, setLogupData] = useState({email: '', password: '', confirmPassword: ''});
    
    const[errorConfirm, setErrorConfirm] = useState({border: ''});

    function SetLogupData(data){
        
        if (data.type === 'email') {
            setLogupData({...logupData, email: data.value})
            return;
        }

        if(data.placeholder === 'Confirm Password'){
            setLogupData({...logupData, confirmPassword: data.value})
            return
        }

        setLogupData({...logupData, password: data.value})
    }


    async function OnChange(event){
        event.preventDefault();

        setErrorConfirm({border: ''})
    }

    async function OnSubmit(event){

        event.preventDefault();
        
        if(logupData.email === ''){
            return;
        }
      
        if(logupData.password !== logupData.confirmPassword){
            
            console.log('error')
            setErrorConfirm({border: 'red'})
            return;
        }

        setButtonBody(

            <div id="glyphicon glyphicon-refresh glyphicon-refresh-animate">
                <span>Loading...</span>
            </div>
        )

      
    }

    return (

           
        <form onSubmit={OnSubmit} >

            <LogInput setLogData={SetLogupData} icon='fas fa-user' type='email' placeholder='email'/>

            <LogInput setLogData={SetLogupData} icon='fas fa-lock' type='password' placeholder='Password'/>

            <LogInput style={errorConfirm} setLogData={SetLogupData} icon='fas fa-lock' type='password' placeholder='Confirm Password'/>
            
            <LinkButton setLogState={setLogState}>login</LinkButton>

            <Button>{buttonBody}</Button>

        </form>
    )
}


export default Logup;
