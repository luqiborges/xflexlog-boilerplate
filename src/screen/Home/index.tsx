import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { setKey } from '~/store/modules/teste/slice';
import { Container } from './styles';

export default function Home() {
  const navigation = useNavigation();
  const key = useAppSelector(store => store.teste.key);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <SafeAreaView>
        <Text>HOME</Text>
        <TouchableOpacity
          style={{ flex: 1, maxWidth: 100, backgroundColor: 'red' }}
          onPress={() => {
            dispatch(setKey({ key: 'teste' }));
          }}
        >
          <Text>BOTÃO</Text>
        </TouchableOpacity>
        <Text>{key}</Text>
      </SafeAreaView>
    </Container>
  );
}
