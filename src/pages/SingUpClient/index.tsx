import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { v4 } from 'react-native-uuid';

import Repository from '../../components/Repository';
import getRealm from '../../services/realm';

import {
  Container,
  ChangePageButton,
  ChangePageContainer,
  Submit,
  Form,
} from './styles';

import Map from '../../components/Map';

import Input from '../../components/Input';

import Button from '../../components/Button';

const SignUpClient: React.FC = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState('');

  async function saveRepository(repository: any) {
    const data = {
      id: repository.id,
      name: repository.name,
      longitude: repository.longitude,
      latitude: repository.latitude,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Repository', data);
    });
  }

  async function handleAddRepository() {
    const data = {
      id: 105,
      name: 'teste',
      longitude: 10,
      latitude: 10,
    };

    await saveRepository(data);

    setInput('');
  }

  function handleGetLocation(username, coordinates) {
    console.log(username, coordinates);
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
          <Map handleLocation={handleGetLocation} />

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
