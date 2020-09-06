import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import { useCardAnimation } from '@react-navigation/stack';
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

  useEffect(() => {
    const { userData } = route.params;
    if (userData) {
      // console.log(
      //   userData.id,
      //   userData.name,
      //   userData.latitude,
      //   userData.longitude,
      // );
      setIdValue(userData.id);
      setNameValue(userData.name);
      setLatitudeValue(userData.latitude);
      setLongitudeValue(userData.longitude);
    }
  }, [route]);

  async function saveRepository(repository: any) {
    const data = {
      id: repository.id,
      name: repository.name,
      longitude: repository.longitude,
      latitude: repository.latitude,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Repository', data, 'modified');
    });

    return data;
  }

  async function handleAddRepository() {
    const newid = uuidv4();

    const data = {
      id: newid,
      name: nameValue,
      longitude: latitudeValue,
      latitude: longitudeValue,
    };

    await saveRepository(data);
  }

  async function handleUpdateRepository(repository: any) {
    if (!repository.id) {
      handleAddRepository();
    } else {
    }
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
          <Input
            placeholder="name"
            handleUserChange={handleUserChange}
            nameValue={nameValue}
          />
          <Map
            handleMapSetLocation={handleMapSetLocation}
            latitudeValue={latitudeValue}
            longitudeValue={longitudeValue}
          />

          <Submit onPress={handleAddRepository}>
            <Button Text="Salvar" onPress={handleAddRepository} />
            <Button Text="Excluir" />
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
