import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, TextInput, Button, Gap} from '../../components';

function SignIn({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Header title="Sign In" />
      <View style={styles.contentWrapper}>
        <TextInput label="Email Address" placeholder="Input your email" />

        <Gap height={16} />

        <TextInput label="Password" placeholder="Input your password" />

        <Gap height={24} />

        <Button text="Sign In" />

        <Gap height={12} />

        <Button
          text="Create New Account"
          color="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    marginTop: 24,
    paddingTop: 26,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
});
