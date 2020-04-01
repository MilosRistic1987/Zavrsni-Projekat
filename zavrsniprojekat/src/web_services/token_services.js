let state={
    token:null
}

const deleteToken=()=>{
    return new Promise((resolve)=>{
        state.token=null;
        localStorage.removeItem('token')
        resolve();
    })
}

const setToken=(token)=>{
    state.token=token;
    localStorage.setItem('token', token);
}

const getToken=()=>{
    const token=state.token ? state.token:localStorage.getItem('token') ? localStorage.getItem('token') : null
    return token;
}

const isLogin=()=>{
    return state.token || localStorage.getItem('token')
} 

export {setToken, getToken,isLogin,deleteToken}