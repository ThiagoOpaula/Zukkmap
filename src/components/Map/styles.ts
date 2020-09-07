import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Container = styled.View`
  width: 80%;
  height: 700px;
  margin-bottom: 0px;
  padding-bottom: 200px;
`;

export const Maps = styled(MapView)`
  flex: 1;
`;
