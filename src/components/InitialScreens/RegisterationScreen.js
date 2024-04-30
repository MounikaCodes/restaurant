import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import {Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {styles} from './RegisterationScreenStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegistrationScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [user_name, setUserName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('user_name');
  }, []);

  const handleRegister = () => {
    if (!validateInputs()) {
      return;
    }
    fetch('https://mssriharsha.pythonanywhere.com/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_name: user_name,
        user_email: email,
        user_password: password,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })

      .then(data => {
        // If registration successful, navigate to login screen
        navigation.navigate('Login');
        console.log(user_name, user_name);
        AsyncStorage.setItem('user_name', user_name);
        console.log('response', data); // Change 'response' to 'data'
      })

      .catch(error => {
        console.error('Error:', error);
        // Show error alert message
        console.log('Error', 'Registration failed. Please try again later.');
        Alert.alert('Error', 'Registration failed. Please try again later.');
      });
  };
  const validateInputs = () => {
    // Validate name
    if (!user_name || user_name.length > 50) {
      Alert.alert(
        'Error',
        'Name is required and should be up to 50 characters.',
      );
      return false;
    }
    if (!password) {
      Alert.alert('Error', 'Set your password');
      return false;
    }
    // Validate mobile number
    if (!/^\d{10}$/.test(mobile)) {
      Alert.alert('Error', 'Mobile number should be a 10-digit number.');
      return false;
    }

    // Validate email format
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return false;
    }

    // Other validation logic for email, dob, etc. can be added here

    return true;
  };

  const validateEmail = email => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const resetFields = () => {
    setUserName('');
    setMobile('');
    setEmail('');
    setPassword('');
  };
  const handleLogin = () => {
    navigation.navigate('Login');
    resetFields();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../../assets/bg.jpg')}>
        <Card style={styles.Card}>
          <Text style={styles.title}>Register</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter email-id"
            placeholderTextColor="#000"
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#000"
            onChangeText={text => setUserName(text)}
            value={user_name}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            placeholderTextColor="#000"
            onChangeText={text => setMobile(text)}
            value={mobile}
          />
          <TextInput
            style={styles.input}
            placeholder="Set your password"
            secureTextEntry={true}
            placeholderTextColor="#000"
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.button2}>Login here</Text>
          </TouchableOpacity>
        </Card>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;
