import React from 'react';
import {View} from 'react-native';
import {Header, TextInput, Button} from '../../components';

function SignIn() {
  return (
    <View>
      <Header title="Sign In" />
      <TextInput label="Email Address" placeholder="Input your email" />
      <TextInput label="Password" placeholder="Input your password" />
      <Button text="Sign In" />
    </View>
  );
}

export default SignIn;
