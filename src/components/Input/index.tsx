import React, { useEffect, useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  placeholder: string;
  handleUserChange: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  handleUserChange,
}: InputProps) => {
  function handleChangeText(text: string) {
    handleUserChange(text);
  }

  return (
    <Container>
      <TextInput placeholder={placeholder} onChangeText={handleChangeText} />
    </Container>
  );
};

export default Input;
