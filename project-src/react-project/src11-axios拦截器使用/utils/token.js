const setToken = token => {
    window.localStorage.setItem('token', token)
}

const getToken = () => {
    return window.localStorage.getItem('token')
}

const removeToken = () => {
    window.localStorage.removeItem('token')
}

export {
    setToken,
    getToken,
    removeToken
}