import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import {TransitionPresets} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getToken, removeToken} from '../data/storage';

const OtherSettingsScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={handleLogout}
          style={{position: 'absolute', top: '30%', left: '65%', zIndex: 1}}>
          <Icon name="logout" color="white" size={25} />
        </TouchableOpacity>
      ),
    });
  }, []);
  const handleLogout = async () => {
    // Clear AsyncStorage and navigate to Login screen
    await removeToken();
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This Page is Under Development</Text>
      <LottieView
        style={styles.lottie}
        source={require('../../lottie/one.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  lottie: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    zIndex: -2,
  },

  text: {
    marginTop: 40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
});

export default OtherSettingsScreen;
