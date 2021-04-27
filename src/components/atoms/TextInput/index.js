import React from 'react';
import {Text, TextInput as TextInputRN, View, StyleSheet} from 'react-native';

function TextInput(props) {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInputRN style={styles.input} placeholder={props.placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    paddingVertical: 9,
    marginTop: 6,
  },
});

export default TextInput;
