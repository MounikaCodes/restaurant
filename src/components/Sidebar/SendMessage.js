import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getToken, removeToken} from '../../data/storage';
import {styles} from './SendMessageStyles';

const SendMessageScreen = ({navigation}) => {
  const [message, setMessage] = useState('');

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
  const handleSendMessage = () => {
    console.log('Message sent:', message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Message</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your message here"
        placeholderTextColor="#ccc"
        multiline={true}
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SendMessageScreen;
