import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({clearFields}) => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation('');

  useEffect(() => {
    // Check if token exists upon component mount
    AsyncStorage.getItem('token')
      .then(token => {
        if (token) {
          navigation.navigate('Dashboard');
        }
      })
      .catch(error => console.error('Error retrieving token:', error));
  }, []);

  const handleLogin = () => {
    if (!userEmail || !password) {
      console.error('Please fill in all fields.');
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    fetch('https://mssriharsha.pythonanywhere.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_email: userEmail,
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
        if (data.token) {
          AsyncStorage.setItem('token', data.token)
            .then(() => {
              console.log('Token stored successfully');
            })
            .catch(error => {
              console.error('Error storing token:', error);
            });
          // If token is present in the response, navigate to Dashboard
          navigation.navigate('Dashboard');
          console.log('Login successful', data);
        } else {
          // If token is not present, show error message
          console.error('Login failed: Token not received');
          Alert.alert('Error', 'Invalid email or password.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Show error alert message
        Alert.alert('Error', 'Login failed. Please try again later.');
      });
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotScreen');
  };
  const handleRegister = () => {
    navigation.navigate('RegistrationScreen');
  };

  return (
    <View style={styles.container}>
      <LottieView
        style={{width: 300, height: 300}}
        source={require('../../lottie/login.json')}
        autoPlay
        loop
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="User email"
        placeholderTextColor="#000000"
        value={userEmail}
        onChangeText={text => setUserEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#000000"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button1} onPress={handleLogin}>
        <Text style={styles.buttonText1}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.button2}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.button2}>New ? Register here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    color: '#000000',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Verdana, sans-serif',
    marginBottom: 20,
    color: '#000000',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000000',
  },
  button1: {
    width: '50%',
    height: 40,
    backgroundColor: '#007bff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText1: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button2: {
    marginTop: 10,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
