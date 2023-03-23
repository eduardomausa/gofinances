import React from 'react';
import { Button, ImageContainer, Text } from './styles';
import { RectButton, type RectButtonProps } from 'react-native-gesture-handler';
import { type SvgProps } from 'react-native-svg';

interface Props extends RectButtonProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export function SocialSignInButton({ title, svg: Svg, ...rest }: Props) {
  return (
    <Button {...rest}>
      <ImageContainer>
        <Svg />
      </ImageContainer>

      <Text>{title}</Text>
    </Button>
  );
}
