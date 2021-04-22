import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Logo} from '../../assets';

function SplashScreen() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text>Money Tracker</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02CF8E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
