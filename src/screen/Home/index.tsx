import React, { useState } from 'react';

import KeyboardScrollBackground from '~/components/KeyboardScrollBackground';
import ChartCard from '~/components/ChartCard';
import ErrorCard from '~/components/ErrorCard';
import GaugeCard from '~/components/GaugeCard';

export default function Home() {
  return (
    <KeyboardScrollBackground style={{ backgroundColor: '#1F242B', flex: 1 }}>
      <GaugeCard current={70} min={0} max={100} />
      <ChartCard value={20} />
      <ErrorCard name="close-box-multiple-outline" text="PIN is not correct" />
    </KeyboardScrollBackground>
  );
}
