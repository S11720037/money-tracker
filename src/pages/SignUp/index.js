import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import {Header} from '../../components';
import {TextInput, Gap, Button} from '../../components';

function SignUp({navigation}) {
  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);

  const getImage = () => {
    launchImageLibrary(
      {maxWidth: 300, maxHeight: 300, includeBase64: true},
      response => {
        if (response.didCancel) {
          setHasPhoto(false);
        } else {
          setPhoto(response.uri);
          setHasPhoto(true);
        }
      },
    );
  };

  return (
    <View style={styles.container}>
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
