export default async function DeleteAccount(basicToken){

    let isAccountDeleted = false;

    let res = await fetch("https://teamactivity.herokuapp.com/account", {
        method: "DELETE",
        headers: {
            "Authorization": `Basic ${basicToken}`
        }
    });

    let status = await res.status;

    if(status === 200){
        
        isAccountDeleted = true;
    }
    
    return isAccountDeleted;
}
