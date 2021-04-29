import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Header, TextInput, Button, Gap} from '../../components';

import Home from '../../pages';
import firebase from '../../config/Firebase';

function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed in
        var user = userCredential.user;
        // console.log(user);

        navigation.replace('Home');
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <ScrollView style={{flex: 1}}>
      <Header title="Sign In" />
      <View style={styles.contentWrapper}>
        <TextInput
          label="Email Address"
          placeholder="Input your email"
          value={email}
          onChangeText={setEmail}
        />

        <Gap height={16} />

        <TextInput
          label="Password"
          placeholder="Input your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <Gap height={24} />

        <Button text="Sign In" onPress={onSubmit} />

        <Gap height={12} />

        <Button
          text="Create New Account"
          color="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </ScrollView>
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
