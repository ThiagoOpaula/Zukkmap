import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder, value }: InputProps) => {
  console.log(value);

  return (
    <Container>
      <TextInput placeholder={placeholder} />
    </Container>
  );
};

export default Input;
