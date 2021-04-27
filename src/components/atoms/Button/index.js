import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Button(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02CF8E',
    height: 45,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  text: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default Button;
