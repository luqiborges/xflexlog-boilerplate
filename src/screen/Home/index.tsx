import React, { useState } from 'react';

import KeyboardScrollBackground from '~/components/KeyboardScrollBackground';
import ExportView from '~/components/ExportView';

export default function Home() {
  const projects = [
    { name: 'Sensor Pairing 01', subtitle: 'Linked TX: 2' },
    { name: 'Sensor Pairing 02', subtitle: 'Linked TX: 2' },
    { name: 'Sensor Pairing 03', subtitle: 'Linked TX: 2' },
    { name: 'Sensor Pairing 04', subtitle: 'Linked TX: 2' },
    { name: 'Sensor Pairing 05', subtitle: 'Linked TX: 2' },
    { name: 'Sensor Pairing 06', subtitle: 'Linked TX: 2' },
  ];

  return (
    <KeyboardScrollBackground style={{ backgroundColor: '#1F242B', flex: 1 }}>
      <ExportView projects={projects} />
    </KeyboardScrollBackground>
  );
}
