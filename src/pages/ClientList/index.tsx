import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import Repository from '../../components/Repository';

import Input from '../../components/Input';

import getRealm from '../../services/realm';

import Client from '../../models/Client';

import {
  Container,
  ChangePageContainer,
  ChangePageButton,
  List,
} from './styles';

const ClientList: React.FC = () => {
  const navigation = useNavigation();
  const [namevalue, setNameValue] = useState('');
  const [repositories, setRepositories] = useState([]);

  function handleUserChange(name: string) {
    setNameValue(name);
  }

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm();

      const data = realm.objects('Repository');

      setRepositories(data);
    }

    loadRepositories();
  }, [namevalue]);

  return (
    <>
      <Container>
        <Input
          nameValue=""
          placeholder="Procurar usuário"
          handleUserChange={handleUserChange}
        />
      </Container>

      <List
        keyboardShouldPersistTaps="handled"
        data={repositories}
        renderItem={({ item }) => <Repository data={item} />}
      />

      <ChangePageContainer
        onPress={() => navigation.navigate('SignUpClient', new Client())}
      >
        <ChangePageButton>Cadastrar cliente</ChangePageButton>
      </ChangePageContainer>
    </>
  );
};

export default ClientList;
