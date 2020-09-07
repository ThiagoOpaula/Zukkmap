import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 400px;
`;

export const ChangePageContainer = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-width: 1.25px;
  border-color: #0ca6e8;
  background: #ffffff;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ChangePageButton = styled.Text`
  color: #0ca6e8;
  font-size: 24px;
  margin-left: 16px;
`;

export const Submit = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  padding-top: 460px;
`;

export const Form = styled.View`
  flex: 1;
`;
