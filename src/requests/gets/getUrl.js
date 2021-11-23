export default async function GetDomen(basicToken){

    const res = await fetch("https://teamactivity.herokuapp.com/domen", {

        headers:{
            "Authorization": `Basic ${basicToken}`
        }
    });
    
    return await res.json();
}
