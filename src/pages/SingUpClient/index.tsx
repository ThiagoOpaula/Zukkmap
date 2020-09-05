import React, { useState, useEffect } from 'react';

import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ChangePageButton,
  ChangePageContainer,
  Submit,
  Form,
  Input,
} from './styles';

import Map from '../../components/Map';

import Button from '../../components/Button';

const SignUpClient: React.FC = () => {
  const navigation = useNavigation();

  const [input, setInput] = useState('');

  function handleAddRepository() {
    console.log(input);
  }

  return (
    <>
      <Form>
        <Container>
          <Input
            value={input}
            onChangeText={text => setInput(text)}
            placeholder="name"
          />
          <Map />

          <Submit onPress={handleAddRepository}>
            <Button Text="Salvar" onPress={handleAddRepository} />
            <Button Text="Excluir" />
          </Submit>
        </Container>
      </Form>

      <ChangePageContainer onPress={() => navigation.navigate('ClientList')}>
        <ChangePageButton>Lista de clientes</ChangePageButton>
      </ChangePageContainer>
    </>
  );
};

export default SignUpClient;
