import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background-color: #fff;
  border-width: 2px;
  border-color: #ccc;
  margin-top: 10px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;
