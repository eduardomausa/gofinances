import React from 'react';
import { type TextInputProps } from 'react-native';
import { Container } from './styles';

interface Props extends TextInputProps {
  active: boolean;
}

export function Input({ active = false, ...rest }: Props) {
  return <Container active={active} {...rest} />;
}
