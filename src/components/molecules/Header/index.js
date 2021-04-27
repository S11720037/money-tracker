import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function Header(props) {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    marginLeft: 24,
    marginVertical: 37,
    fontWeight: '500',
  },
});

export default Header;
