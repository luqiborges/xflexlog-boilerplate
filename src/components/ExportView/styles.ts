import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.ScrollView`
  background-color: ${colors.white};
`;

export const SelectedProjects = styled.Text`
  font-size: ${metrics.fontSizeMedium}px;
  color: ${colors.tertiaryText};
`;

export const Title = styled.Text`
  font-size: ${metrics.fontSizeHigh}px;
  text-align: center;
  padding-top: ${metrics.basePadding}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${metrics.basePadding}px ${metrics.basePadding * 2}px 0
    ${metrics.basePadding * 2}px;
`;

export const ProjectsView = styled.ScrollView`
  padding: ${metrics.basePadding}px;
`;

export const ProjectName = styled.Text`
  font-size: ${metrics.fontSizeMedium}px;
`;

export const ProjectSubtitle = styled.Text`
  font-size: ${metrics.fontSizeLow}px;
`;

export const ProjectText = styled.View`
  padding-left: ${metrics.basePadding / 4}px;
`;

export const TextSelect = styled.Text`
  color: ${colors.secondary};
`;

export const ButtonView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ProjectsTouchable = styled.TouchableOpacity<{
  index: number;
  lenght: number;
}>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-top: ${metrics.basePadding / 2}px;
  padding-bottom: ${metrics.basePadding / 2}px;
  border-bottom-width: ${props => (props.index === props.lenght - 1 ? 0 : 1)}px;
  border-bottom-color: ${colors.quaternary};
`;
