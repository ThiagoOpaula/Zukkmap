import React, { useEffect, useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  placeholder: string;
  nameValue: string;
  handleFilterInput: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  nameValue,
  handleFilterInput,
}: InputProps) => {
  const handleChangeText = (text: string) => {
    handleFilterInput(text);
  };

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
