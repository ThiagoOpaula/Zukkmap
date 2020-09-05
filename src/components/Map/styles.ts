import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Container = styled.View`
  width: 100%;
  height: 600px;
  margin-bottom: 0px;
  padding-bottom: 100px;
`;

export const Maps = styled(MapView)`
  flex: 1;
`;
