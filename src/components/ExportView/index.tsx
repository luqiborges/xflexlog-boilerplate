import React, { useState, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import Button from '~/components/Button';

import { colors, metrics } from '~/styles';

import {
  Container,
  Title,
  Header,
  ProjectsView,
  ProjectsTouchable,
  ProjectName,
  ProjectSubtitle,
  ProjectText,
  TextSelect,
  ButtonView,
} from './styles';

const ExportView: React.FC<{ projects: {}[] }> = ({ projects }) => {
  const [indexChecked, setIndexChecked] = useState<boolean[]>(
    new Array(projects.length).fill(false),
  );
  console.log(indexChecked);

  const projectCounter = useCallback(() => {
    let count = 0;
    for (let checked of indexChecked) {
      if (checked) count++;
    }
    return count;
  }, [indexChecked]);

  const handleIndex = useCallback(
    index => {
      let aux = [...indexChecked];
      aux[index] = !aux[index];
      setIndexChecked(aux);
    },
    [indexChecked],
  );

  const selectAll = useCallback(() => {
    let aux = new Array(projects.length).fill(true);
    setIndexChecked(aux);
  }, [projects]);

  const unselectAll = useCallback(() => {
    let aux = new Array(projects.length).fill(false);
    setIndexChecked(aux);
  }, [projects]);

  return (
    <Container>
      <Title>All projects avaliable to export</Title>
      <Header>
        <TextSelect>{projectCounter()} Projects Selected</TextSelect>
        <TouchableOpacity onPress={selectAll}>
          <TextSelect style={{ left: 32 }}>Select All</TextSelect>
        </TouchableOpacity>
        <TouchableOpacity onPress={unselectAll} style={{ paddingLeft: 20 }}>
          <TextSelect>Unselect All</TextSelect>
        </TouchableOpacity>
      </Header>
      <ProjectsView>
        {projects?.map((value: any, index: number) => (
          <ProjectsTouchable
            key={value.name}
            onPress={() => handleIndex(index)}
            index={index}
            lenght={projects.length}
          >
            <CheckBox
              disabled={false}
              value={indexChecked[index]}
              onValueChange={() => handleIndex(index)}
              tintColors={{ true: colors.secondary, false: colors.quaternary }}
              boxType="circle"
            />
            <ProjectText>
              <ProjectName>{value.name}</ProjectName>
              <ProjectSubtitle>{value.subtitle}</ProjectSubtitle>
            </ProjectText>
          </ProjectsTouchable>
        ))}
      </ProjectsView>
      <ButtonView>
        <Button
          width={metrics.screenWidth * 0.95}
          onPress={() => console.log('exportado!')}
        >
          EXPORT
        </Button>
      </ButtonView>
    </Container>
  );
};

export default ExportView;
