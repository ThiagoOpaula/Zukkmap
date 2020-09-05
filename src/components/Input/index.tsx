import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder }: InputProps) => {
  const [userName, setUserName] = useState('');

  return (
    <Container>
      <TextInput placeholder={placeholder} value={userName} />
    </Container>
  );
};

export default Input;
