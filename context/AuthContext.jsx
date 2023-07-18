"use client"
import { createContext, useState } from "react"

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [token, setToken] = useState()

  useEffect( () => {
    // on load or refresh, check if user was previously logged-in
    if(!user) {
      const previousUser = sessionStorage.getItem("user")
      const previousToken = sessionStorage.getItem("token")
      if(previousUser) setUser(JSON.parse(previousUser))
      if(previousToken) setToken(JSON.parse(previousToken))
    }
  }, [])

  const handleLogin = (data) => {
    setUser (data.user)
    setToken (data.token)
    sessionStorage.setItem("user", JSON.stringify(data.user))
    sessionStorage.setItem("user", JSON.stringify(data.token))
  }

  const handleLogout = () => {
    setUser()
    setToken()
    sessionStorage.clear()
  }

  return <AuthContext.Provider value={{ user, token, handleLogin, handleLogout }}>
    {children}</AuthContext.Provider>

}
