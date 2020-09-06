import React, { useEffect, useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  placeholder: string;
  nameValue: string;
  handleUserChange: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  nameValue,
  handleUserChange,
}: InputProps) => {
  function handleChangeText(text: string) {
    handleUserChange(text);
  }

  return (
    <Container>
      <TextInput
        placeholder={placeholder}
        onChangeText={handleChangeText}
        value={nameValue}
      />
    </Container>
  );
};

export default Input;
