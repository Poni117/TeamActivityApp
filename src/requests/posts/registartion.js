export default async function  registration(accountId){

    let response = await fetch(`https://teamactivity.herokuapp.com/registration`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            accountId
        })
    });

    return response.status;
}
