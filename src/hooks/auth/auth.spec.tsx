import { renderHook, act } from '@testing-library/react-hooks'
import { AuthProvider, useAuth } from '.'

jest.mock('expo-auth-session', () => {
  return {
    startAsync: () => {
      return {
        type: 'success',
        params: {
          access_token: 'google-token'
        }
      }
    }
  }
})

describe('Auth Hook', () => {
  it('should be able to sign in with Google account', async () => {
    global.fetch = jest.fn(async () => await Promise.resolve({
      json: async () =>
        await Promise.resolve({
          id: 'userInfo.id',
          email: 'userInfo.email',
          name: 'userInfo.given_name',
          photo: 'userInfo.picture',
          locale: 'userInfo.locale',
          verified_email: 'userInfo.verified_email'
        })
    })) as jest.Mock

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    })

    await act(async () => { await result.current.signInWithGoogle() })

    expect(result.current.user).toBeTruthy()
  })
})
