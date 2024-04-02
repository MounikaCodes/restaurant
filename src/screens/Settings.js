import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getToken, removeToken} from '../data/storage';

const SettingsScreen = () => {
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
  const navigation = useNavigation('');

  const handleProfileSettings = () => {
    console.log('Navigate to Profile Settings');
    navigation.navigate('ProfileScreen');
  };

  const handleChangePassword = () => {
    console.log('Change password clicked');
    navigation.navigate('ChangePasswordScreen');
  };

  const handleOtherSettings = () => {
    console.log('Other settings clicked');
    navigation.navigate('OthersScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={handleProfileSettings}>
        <Text style={styles.optionText}>Profile Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={handleChangePassword}>
        <Text style={styles.optionText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={handleOtherSettings}>
        <Text style={styles.optionText}>Other Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    paddingHorizontal: 20,
  },
  optionContainer: {
    width: '100%',
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  optionText: {
    fontSize: 16,
    color: 'white',
  },
});

export default SettingsScreen;
