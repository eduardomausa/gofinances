import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import { Register } from '.'
import { ThemeProvider } from 'styled-components/native'
import theme from '../../global/styles/theme'

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn()
  }
})

describe('Register Screen', () => {
  it('should open category modal when the user clicks in the category button', async () => {
    const { getByTestId } = render(
      <Register />,
      {
        wrapper: Providers
      }
    )

    const categoryModal = getByTestId('modal-category')
    const categoryButton = getByTestId('category-button')

    fireEvent.press(categoryButton)

    await waitFor(() => {
      expect(categoryModal.props.visible).toBeTruthy()
    })
  })
})
