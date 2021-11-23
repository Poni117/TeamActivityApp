export default async function getVerefication(basicToken){

    const res = await fetch("https://teamactivity.herokuapp.com/verefication", {

        headers:{
            "Authorization": `Basic ${basicToken}`
        }
    });
    
    const data = await res.json();
}
