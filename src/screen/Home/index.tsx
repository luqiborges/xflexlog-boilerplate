import React, { useState } from 'react';

import KeyboardScrollBackground from '~/components/KeyboardScrollBackground';
import ExportView from '~/components/ExportView';

export default function Home() {
  const projects = [
    { name: 'Sensor Pairing 01', subtitle: '3 configurations found' },
    { name: 'Sensor Pairing 02', subtitle: '1 configurations found' },
    { name: 'Sensor Pairing 03', subtitle: '3 configurations found' },
    { name: 'Sensor Pairing 04', subtitle: '4 configurations found' },
    { name: 'Sensor Pairing 05', subtitle: '3 configurations found' },
    { name: 'Sensor Pairing 06', subtitle: '2 configurations found' },
  ];

  return (
    <KeyboardScrollBackground style={{ backgroundColor: '#1F242B', flex: 1 }}>
      <ExportView projects={projects} />
    </KeyboardScrollBackground>
  );
}
