import React from 'react';

import { useNavigation } from '@react-navigation/native';

import Repository from '../../components/Repository';

import Input from '../../components/Input';

import {
  Container,
  ChangePageContainer,
  ChangePageButton,
  List,
} from './styles';

const ClientList: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <Input placeholder="Procurar usuário" />
      </Container>

      <List
        keyboardShouldPersistTaps="handled"
        data={[
          {
            id: 1,
            name: 'João',
          },
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Repository data={item} />}
      />

      <ChangePageContainer
        onPress={() => navigation.navigate('SignUpClient', { id: 1 })}
      >
        <ChangePageButton>Cadastrar cliente</ChangePageButton>
      </ChangePageContainer>
    </>
  );
};

export default ClientList;
