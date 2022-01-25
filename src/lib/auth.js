const loginToken = 'token'

export function setToken(token){
  window.localStorage.setItem(loginToken, token)
}