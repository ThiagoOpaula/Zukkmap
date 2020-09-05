import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  Text: string;
}

const Button: React.FC<ButtonProps> = ({ Text, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonText>{Text}</ButtonText>
    </Container>
  );
};

export default Button;
