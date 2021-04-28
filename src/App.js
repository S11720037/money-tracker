import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import Router from './router';

function App() {
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default App;
