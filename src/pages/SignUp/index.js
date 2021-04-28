import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Header} from '../../components';
import {TextInput, Gap, Button} from '../../components';

function SignUp({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Sign Up" onBack={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <TextInput label="Full Name" placeholder="Enter your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Enter your password" />
        <Gap height={16} />
        <Button text={'Continue'} />
      </View>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    paddingHorizontal: 24,
    flex: 1,
    marginTop: 24,
    backgroundColor: 'white',
  },
});
