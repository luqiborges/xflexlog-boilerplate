import React from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor } from '~/store';

export default function Index() {
  return (
    <MenuProvider skipInstanceCheck={true}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </MenuProvider>
  );
}
