import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {styles} from './ForgotPasswordStyles';
const ForgotPasswordScreen = () => {
  const [mobile, setMobile] = useState('');

  const handleResetPassword = () => {
    if (mobile === '') {
      alert('Please enter your mobile number');
      return;
    }
    console.log('Reset Password button clicked');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>
        Enter your mobile number to reset your password
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Mobile Number"
        placeholderTextColor="#000000"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={setMobile}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;
