import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`;

export const ChangePageContainer = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-width: 1px;
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

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  ShowVerticalScrollIndicator: false,
})`
  margin-top: -20px;
  margin-bottom: 120px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: -30px;
`;
