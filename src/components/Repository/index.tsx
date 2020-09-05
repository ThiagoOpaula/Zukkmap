import React from 'react';

import { Container, Name } from './styles';

interface Info {
  name: string;
}

const Repository: React.FC<Info> = ({ name }: Info) => {
  return (
    <>
      <Container>
        <Name>João Ferreira lima</Name>
      </Container>
    </>
  );
};

export default Repository;
