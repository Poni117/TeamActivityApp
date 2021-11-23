
import btoa from 'btoa';
import dotenv from 'dotenv';
dotenv.config();

export default async function isAccountExist(accountId){

    let isAccountExist = false;

    let res = await fetch("https://teamactivity.herokuapp.com/is_account_exist", {
        method: "GET",
        headers: {
            "Authorization": `Basic ${btoa(`${accountId}:${process.env.REACT_APP_SECRET_KEY}`)}`
        }
    });

    let status = await res.status;
    
    if(status === 200){
        
        isAccountExist = true;
    }
    
    return isAccountExist;
}
