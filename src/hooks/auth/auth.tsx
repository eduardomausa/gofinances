import { createContext, ReactNode, useContext } from 'react'
import * as AuthSession from 'expo-auth-session'

interface AuthProviderProps {
  children: ReactNode
}

interface User {
  id: string
  name: string
  email: string
  photo?: string
}

interface AuthContextData {
  user: User
  signInWithGoogle(): Promise<void>
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: '12345',
    name: 'Eduardo Mausa',
    email: 'mausa@mail.com'
  }

  async function signInWithGoogle() {
    try {
      const CLIENT_ID = '1004109762039-qm2qe7dsm4g4k61v98p1dls9cimkb7em.apps.googleusercontent.com'
      const REDIRECT_URI = 'https://yourwebsite.com'
      const RESPONSE_TYPE = 'token'
      const SCOPE = encodeURI('profile email')

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
      const response = await AuthSession.startAsync({ authUrl })

      console.log(response);

    } catch (error: any) {
      throw new Error(error)
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      signInWithGoogle
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }