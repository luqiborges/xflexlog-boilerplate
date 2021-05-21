import React, { useState } from 'react';

import KeyboardScrollBackground from '~/components/KeyboardScrollBackground';
import MissingView from '~/components/MissingView';
import ErrorCard from '~/components/ErrorCard';
import GaugeCard from '~/components/GaugeCard';

export default function Home() {
  return (
    <KeyboardScrollBackground style={{ backgroundColor: '#1F242B', flex: 1 }}>
      <MissingView
        title="You don't have a project, create a new one"
        buttonText="NEW PROJECT"
      />
      <GaugeCard current={70} min={0} max={100} />
      <ErrorCard name="wifi-off" text="Transmitter not found" />
    </KeyboardScrollBackground>
  );
}
