import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Client from '../../models/Client';
import ClientRepository from '../../repositories/clientRepository';
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

interface Info {
  route: any;
}

const SignUpClient: React.FC<Info> = ({ route }: Info) => {
  const navigations = useNavigation();
  const [idValue, setIdValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [latitudeValue, setLatitudeValue] = useState(0);
  const [longitudeValue, setLongitudeValue] = useState(0);
  const clientRepository = new ClientRepository();
  const { userData } = route.params;

  useEffect(() => {
    if (userData) {
      setIdValue(userData.id);
      setNameValue(userData.name);
      setLatitudeValue(userData.latitude);
      setLongitudeValue(userData.longitude);
    }
  }, [route]);

  async function handleAddClient() {
    const client = new Client();
    client.id = uuidv4();
    client.name = nameValue;
    client.longitude = latitudeValue;
    client.latitude = longitudeValue;

    await clientRepository.SaveClient(client);
  }

  async function handleUpdateClient() {
    const client = new Client();
    client.id = userData.id;
    client.name = nameValue;
    client.longitude = latitudeValue;
    client.latitude = longitudeValue;

    await clientRepository.SaveClient(client, true);
  }

  async function handleSave() {
    if (!userData.id) {
      await handleAddClient();
    } else {
      await handleUpdateClient();
    }
    navigations.navigate('ClientList');
  }

  async function handleDelete() {
    if (userData.id) {
      await clientRepository.DeleteClient(userData.id);

      navigations.navigate('ClientList');
    }
  }

  function handleMapSetLocation(latitude: number, longitude: number) {
    setLatitudeValue(latitude);
    setLongitudeValue(longitude);
  }

  function handleUserInput(name: string) {
    setNameValue(name);
  }

  return (
    <>
      <Form>
        <Container>
          <Input
            placeholder="name"
            handleFilterInput={handleUserInput}
            nameValue={nameValue}
          />
          <Map
            handleMapSetLocation={handleMapSetLocation}
            latitudeValue={latitudeValue}
            longitudeValue={longitudeValue}
          />

          <Submit>
            <Button Text="Salvar" onPress={handleSave} />
            <Button Text="Excluir" onPress={handleDelete} />
          </Submit>
        </Container>
      </Form>

      <ChangePageContainer onPress={() => navigations.navigate('ClientList')}>
        <ChangePageButton>Lista de clientes</ChangePageButton>
      </ChangePageContainer>
    </>
  );
};

export default SignUpClient;
