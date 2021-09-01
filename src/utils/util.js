//function dùng nhiều lần viết ở đây
export const setToken = (token) => {
    localStorage.setItem('TOKEN',token)
}
export const getToken = () => localStorage.getItem('TOKEN');