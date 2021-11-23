 
export default async function getScopes(basicToken){

    let isAccountExist = false;

    let res = await fetch("https://teamactivity.herokuapp.com/scopes_error", {
        method: "GET",
        headers: {
            "Authorization": `Basic ${basicToken}`
        }
    });

    let status = await res.status;

    if(status === 200){
        
        isAccountExist = true;
    }
    
    return isAccountExist;
}
