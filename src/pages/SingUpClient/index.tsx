import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

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
  const [namevalue, setNameValue] = useState('');
  const [latitudevalue, setLatitudeValue] = useState(0);
  const [longitudevalue, setLongitudeValue] = useState(0);
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
    const newid = uuidv4();

    const data = {
      id: newid,
      name: namevalue,
      longitude: latitudevalue,
      latitude: longitudevalue,
    };

    await saveRepository(data);
  }

  function handleMapSetLocation(latitude: number, longitude: number) {
    setLatitudeValue(latitude);
    setLongitudeValue(longitude);
  }

  function handleUserChange(name: string) {
    setNameValue(name);
  }

  return (
    <>
      <Form>
        <Container>
          <Input placeholder="name" handleUserChange={handleUserChange} />
          <Map handleMapSetLocation={handleMapSetLocation} />

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
