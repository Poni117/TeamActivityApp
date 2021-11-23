export default async function IsConfluenceAccessExist(basicToken){

    let isConfluenceAccessExist = false;

    const res = await fetch("https://teamactivity.herokuapp.com/is_confluence_accessToken_exist", {

        headers: {
            "Authorization": `Basic ${basicToken}`
        }
    });

    if(res.status === 200){

        isConfluenceAccessExist = true;
    }
  
    return isConfluenceAccessExist;
}
