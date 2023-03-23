import React from 'react'
import { render } from '@testing-library/react-native'

import { Profile } from '../../../screens/Profile'

describe('Profile', () => {
  it('should check if shows correctly user input name placeholder', () => {
    const { getByPlaceholderText } = render(<Profile />)

    const inputName = getByPlaceholderText('Nome')

    expect(inputName).toBeTruthy()
  })

  it('should check if user data has been loaded', () => {
    const { getByTestId } = render(<Profile />)

    const inputName = getByTestId('input-name')
    const inputLastname = getByTestId('input-lastname')

    expect(inputName.props.value).toEqual('Eduardo')
    expect(inputLastname.props.value).toEqual('Mausa')
  })

  it('should check if title renders correctly', () => {
    const { getByTestId } = render(<Profile />)

    const textTitle = getByTestId('text-title')

    expect(textTitle.props.children).toContain('Perfil')
  })
})
