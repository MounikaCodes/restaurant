import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getToken, removeToken} from '../data/storage';

const SendMessageScreen = ({navigation}) => {
  const [message, setMessage] = useState('');
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
        placeholderTextColor="#000000"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 40,
    color: '#000',
    marginLeft: 100,
  },
  input: {
    width: '100%',
    height: 150,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
    color: '#000000',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#007bff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SendMessageScreen;
