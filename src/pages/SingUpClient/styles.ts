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
  border-color: #1231fc;
  background: #ffffff;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ChangePageButton = styled.Text`
  color: #1231fc;
  font-size: 24px;
  margin-left: 16px;
`;

export const Submit = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  padding-bottom: 45px;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Form = styled.View`
  flex: 1;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background: #fff;
`;
