import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

import {Header} from '../../components';
import {TextInput, Gap, Button} from '../../components';
import firebase from '../../config/Firebase';

function SignUp({navigation}) {
  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoBase64, setPhotoBase64] = useState('');

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed in
        var user = userCredential.user;

        firebase
          .database()
          .ref('users/' + user.uid)
          .set({
            fullName: fullName,
            email: email,
            image: photoBase64,
          });

        showMessage({
          message: 'Akun anda berhasil dibuat',
          type: 'success',
        });
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;

        showMessage({
          message: errorMessage,
          type: 'danger',
        });
      });
  };

  const getImage = () => {
    launchImageLibrary(
      {maxWidth: 300, maxHeight: 300, includeBase64: true},
      response => {
        if (response.didCancel) {
          showMessage({
            message: 'Upload foto dibatalkan',
            type: 'danger',
          });
          setHasPhoto(false);
        } else {
          setPhotoBase64(response.base64);
          setPhoto(response.uri);
          setHasPhoto(true);
        }
      },
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Sign Up" onBack={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <View style={styles.avatarWrapper}>
          <View style={styles.border}>
            <TouchableOpacity onPress={getImage}>
              {hasPhoto && (
                <Image source={{uri: photo}} style={styles.avatar} />
              )}
              {!hasPhoto && (
                <View style={styles.addPhoto}>
                  <Text style={styles.textAddPhoto}>Add Photo</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <TextInput
          label="Full Name"
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
        />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Gap height={16} />
        <Button text={'Continue'} onPress={onSubmit} />
      </View>
    </ScrollView>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 3,
  },
  contentWrapper: {
    paddingHorizontal: 24,
    flex: 1,
    marginTop: 24,
    backgroundColor: 'white',
  },
  addPhoto: {
    backgroundColor: '#f0f0f0',
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  textAddPhoto: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    maxWidth: 40,
    textAlign: 'center',
  },

  border: {
    width: 110,
    height: 110,
    borderRadius: 110,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  avatarWrapper: {
    alignItems: 'center',
    marginVertical: 26,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 90,
  },
});
