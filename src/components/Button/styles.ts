import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 40%;
  height: 40px;
  align-items: center;
  justify-content: center;

  border-width: 1px;
  border-color: red;
`;

export const ButtonText = styled.Text`
  flex: 1;
  color: #333333;
  font-size: 22px;
`;
