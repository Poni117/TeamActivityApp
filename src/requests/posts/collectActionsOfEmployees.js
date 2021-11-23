import btoa from "btoa";

export default async function  collectActionsOfEmployees(accountId){

    const res = await fetch(`https://teamactivity.herokuapp.com/collect_information`, {

        method: "POST",
        headers:{
            "Authorization": `Basic ${btoa(`${accountId}:${process.env.REACT_APP_SECRET_KEY}`)}`,
            'Content-Type': 'application/json'
        },
    });

    return res.status;
}
