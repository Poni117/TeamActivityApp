import btoa from "btoa";

export default async function GetIsAccessesExist(accountId){

    const res = await fetch("https://teamactivity.herokuapp.com/is_accesses_exist", {

        headers: {
            "Authorization": `Basic ${btoa(`${accountId}:${process.env.REACT_APP_SECRET_KEY}`)}`,
            'ContentType': 'application/json'
        }
    });

    return await res.json();
}
