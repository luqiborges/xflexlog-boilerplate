import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const DotsContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const RowPopover = styled.View`
  padding: 5px;
  flex-direction: row;
  align-items: center;
`;

export const TextPopover = styled.Text`
  color: ${colors.secondaryText};
  margin-left: 10px;
`;
