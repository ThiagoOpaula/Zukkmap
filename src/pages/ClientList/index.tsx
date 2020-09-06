import React, { useState, useEffect } from 'react';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import ClientListItem from '../../components/ClientListItem';

import Input from '../../components/Input';

import Client from '../../models/Client';

import ClientRepository from '../../repositories/clientRepository';

import {
  Container,
  ChangePageContainer,
  ChangePageButton,
  List,
} from './styles';

const ClientList: React.FC = () => {
  const navigation = useNavigation();
  const [nameValue, setNameValue] = useState('');
  const [clientList, setClientList] = useState<Realm.Results<Client>>();

  const clientRepository = new ClientRepository();

  const handleFilterInput = async (name: string) => {
    setNameValue(name);
  };

  const loadClients = async () => {
    const data = await clientRepository.GetAll(nameValue);
    setClientList(data);
  };

  useEffect(() => {
    loadClients();
  }, [nameValue]);

  useFocusEffect(
    React.useCallback(() => {
      loadClients();
    }, []),
  );

  return (
    <>
      <Container>
        <Input
          placeholder="Procurar usuário"
          handleFilterInput={handleFilterInput}
        />
      </Container>

      <List
        keyboardShouldPersistTaps="handled"
        data={clientList}
        renderItem={({ item }) => <ClientListItem data={item as Client} />}
      />

      <ChangePageContainer
        onPress={() => {
          navigation.navigate('SignUpClient', { userData: new Client() });
        }}
      >
        <ChangePageButton>Cadastrar cliente</ChangePageButton>
      </ChangePageContainer>
    </>
  );
};

export default ClientList;
