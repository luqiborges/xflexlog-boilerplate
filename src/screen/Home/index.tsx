import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import ModalBox from '~/components/ModalBox';
import WarningCard from '~/components/WarningCard';
import MetricCard from '~/components/MetricCard';
import GaugeCard from '~/components/GaugeCard';
import TankCard from '~/components/TankCard';
import KeyboardScrollBackground from '~/components/KeyboardScrollBackground';
import Button from '~/components/Button';
import ButtonLight from '~/components/ButtonLight';
import { metrics } from '~/styles';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <KeyboardScrollBackground style={{ backgroundColor: '#1F242B', flex: 1 }}>
      <WarningCard indicator={'normal'} />
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text>*** MODAL AQUI ***</Text>
      </TouchableOpacity>
      <ModalBox
        title="Save your edits"
        text="Are you sure you want to save your edits?"
        type="warning"
        isVisible={showModal}
        buttonLeftText="Cancel"
        buttonRightText="Save"
        handleLeftButton={() => setShowModal(false)}
        handleRightButton={() => setShowModal(false)}
      />
      {/* <MetricCard /> */}
      <GaugeCard current={70} min={0} max={100} />
      <TankCard current={123123} min={0} max={1} />
      <Button onPress={() => console.log('eee')} width="100%">
        Button Name
      </Button>
      <ButtonLight
        style={{ marginTop: metrics.baseMargin }}
        onPress={() => console.log('eee')}
        width="100%"
      >
        Button Light Name
      </ButtonLight>
    </KeyboardScrollBackground>
  );
}
