import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: #f5f5f5;
  border-width: 1.5px;
  border-color: #0ca6e8;
  margin-top: 16px;
  width: 95%;
  height: 47.5px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 22px;
  font-weight: bold;
  color: #252627;
  padding-left: 16px;
`;
