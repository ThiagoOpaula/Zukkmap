import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Client from '../../models/Client';
import ClientRepository from '../../repositories/clientRepository';

import {
  Container,
  ChangePageButton,
  ChangePageContainer,
  Submit,
  Form,
} from './styles';

import Map from '../../components/Map';

// import Map2 from '../../components/Map2';

import Input from '../../components/Input';

import Button from '../../components/Button';

interface Info {
  route: any;
}

const SignUpClient: React.FC<Info> = ({ route }: Info) => {
  const navigations = useNavigation();
  const { userData } = route.params;
  const [nameValue, setNameValue] = useState<string>(userData.name);
  const [latitudeValue, setLatitudeValue] = useState(userData.latitude);
  const [longitudeValue, setLongitudeValue] = useState(userData.longitude);
  const clientRepository = new ClientRepository();

  useEffect(() => {
    if (userData) {
      setNameValue(userData.name);
      setLatitudeValue(userData.latitude);
      setLongitudeValue(userData.longitude);
    }
  }, [userData]);

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

  const handleMapSetLocation = (latitude: number, longitude: number) => {
    setLatitudeValue(latitude);
    setLongitudeValue(longitude);
  };

  const handleUserInput = (name: string) => {
    setNameValue(name);
  };
  // <Map latitudeValue={latitudeValue} longitudeValue={longitudeValue} />
  const testelat = -23.229578;
  const testelon = -45.904054;
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
            latitudeValue={testelat}
            longitudeValue={testelon}
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
