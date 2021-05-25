import React, { useState, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import Button from '~/components/Button';

import { colors } from '~/styles';

import {
  Container,
  Header,
  SelectedProjects,
  Title,
  SelectAll,
  ProjectsView,
  ProjectsTouchable,
  ProjectName,
  ProjectSubtitle,
  ProjectText,
  TextSelect,
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
      <Header>
        <SelectedProjects>
          {projectCounter()} Projects Selected
        </SelectedProjects>
        <Button
          width={100}
          height={30}
          borderRadius={5}
          onPress={() => console.log('exportado!')}
        >
          EXPORT
        </Button>
      </Header>
      <Title>All projects avaliable to export</Title>
      <SelectAll>
        <TouchableOpacity onPress={selectAll}>
          <TextSelect>Select All</TextSelect>
        </TouchableOpacity>
        <TouchableOpacity onPress={unselectAll} style={{ paddingLeft: 20 }}>
          <TextSelect>Unselect All</TextSelect>
        </TouchableOpacity>
      </SelectAll>
      <ProjectsView>
        {projects?.map((value: any, index: number) => (
          <ProjectsTouchable
            key={value.name}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}
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
    </Container>
  );
};

export default ExportView;
