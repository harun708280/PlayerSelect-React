const getSubscribeLS=()=>{
    const seeSubscribe=localStorage.getItem('subscribe')
    if (seeSubscribe) {
        return JSON.parse(seeSubscribe)
    }
    return [];
}

const addEmailLS=(email)=>{
    const getEmail=getSubscribeLS()
    getEmail.push(email)
    saveEmail(getEmail)
}

const saveEmail=(email)=>{
    const stringEmail=JSON.stringify(email)
    localStorage.setItem('subscribe',stringEmail)
}
export {addEmailLS,getSubscribeLS}