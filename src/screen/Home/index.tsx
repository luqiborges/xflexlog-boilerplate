import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import ModalBox from '~/components/ModalBox';
import WarningCard from '~/components/WarningCard';
import MetricCard from '~/components/MetricCard';
import GaugeCard from '~/components/GaugeCard';
import TankCard from '~/components/TankCard';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={{ backgroundColor: '#1F242B', flex: 1 }}>
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
    </View>
  );
}
