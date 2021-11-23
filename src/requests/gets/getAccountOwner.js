import btoa from "btoa";

export default async function getAccountOwner(accountId){

    const res = await fetch("https://teamactivity.herokuapp.com/account_owner", {

        headers:{
            "Authorization": `Basic ${btoa(`${accountId}:${process.env.REACT_APP_SECRET_KEY}`)}`
        }
    });
    
    if(res.status === 200){
        return await res.json();
    }

    return [];
}
