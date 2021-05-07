import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { setKey } from '~/store/modules/teste/slice';
import { Container } from './styles';
import MetricCard from '~/components/MetricCard';

export default function Home() {
  const navigation = useNavigation();
  const key = useAppSelector(store => store.teste.key);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <SafeAreaView>
        <Text>HOME</Text>
        <MetricCard value={200} cardWidth={300} cardHeight={160} />
        <Text>{key}</Text>
      </SafeAreaView>
    </Container>
  );
}
