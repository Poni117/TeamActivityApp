import btoa from "btoa";

export default async function GetActionsOfEmployees(accountId){

    const res = await fetch("https://teamactivity.herokuapp.com/get_actions_of_employees", {

        headers:{
            "Authorization": `Basic ${btoa(`${accountId}:${process.env.REACT_APP_SECRET_KEY}`)}`,
            "Content-Type": 'application/json'
        }
    });
    

    if(res.status === 200){
        const response = await res.json();

        const datas = JSON.parse(response.replace(/\n+/g, ''));

        return {
            status: res.status,
            isAccessesExist: datas.isAccessesExist,
            users: datas.users,
            projects: {
                codes: datas.codes,
                issues: datas.issues,
                docs: datas.docs
            }
        };
    }

    return {status: res.status};
}
