import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import {TransitionPresets} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getToken, removeToken} from '../../data/storage';
import {styles} from './OthersScreenStyles';
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
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={handleBack}
          style={{position: 'absolute', top: '30%', left: '5%', zIndex: 1}}>
          <Icon name="arrow-back" color="white" size={25} />
        </TouchableOpacity>
      ),
    });
  }, []);
  const handleBack = () => {
    navigation.navigate('Dashboard');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This Page is Under Development</Text>
      <LottieView
        style={styles.lottie}
        source={require('../../../lottie/one.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default OtherSettingsScreen;
