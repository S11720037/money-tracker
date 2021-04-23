import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Logo} from '../../assets';

function SplashScreen() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Money Tracker</Text>
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
  text: {
    fontFamily: 'Poppins-Medium',
    // fontFamily: 'Ubuntu-Medium',
    fontWeight: '500',
    fontSize: 32,
  },
});

export default SplashScreen;
