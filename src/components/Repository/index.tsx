import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Container, Name } from './styles';

import Client from '../../models/Client';

interface Info {
  data: Client;
}

const Repository: React.FC<Info> = ({ data }: Info) => {
  const navigation = useNavigation();

  function edit() {
    navigation.navigate('SignUpClient', {
      userData: data,
    });
  }

  return (
    <>
      <Container onPress={edit}>
        <Name>{data.name}</Name>
      </Container>
    </>
  );
};

export default Repository;
