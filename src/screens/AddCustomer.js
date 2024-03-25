import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {getToken} from '../data/storage';

const AddCustomerScreen = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState(new Date());
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Retrieve token when component mounts
    const fetchToken = async () => {
      const userToken = await getToken();
      setToken(userToken);
    };
    fetchToken();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const handleAddCustomer = () => {
    if (!name || !mobile || !dob || !token || !email) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    fetch('https://mssriharsha.pythonanywhere.com/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customer_name: name,
        customer_phone: mobile,
        customer_email: email,
        customer_dob: dob,
        token: token,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Customer Added Succesfully', data);
        Alert.alert('Customer Added Succesfully');
        setName('');
        setMobile('');
        setDob('');
        setEmail('');
      })
      .catch(error => {
        console.error('Error:', error);
        // Show error alert message
        Alert.alert('Error', 'Login failed. Please try again later.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a Customer</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="customer Name"
        placeholderTextColor="#ccc"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={styles.label}>Mobile Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Customer Mobile Number"
        placeholderTextColor="#ccc"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={text => setMobile(text)}
      />
      <Text style={styles.label}>Email-id:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Text style={styles.label}>Date of Birth:</Text>
      <TextInput
        style={styles.input}
        placeholder="Customer date of birth"
        placeholderTextColor="#ccc"
        value={dob}
        onChangeText={text => setDob(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddCustomer}>
        <Text style={styles.buttonText}>Add Customer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
    marginLeft: 100,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000000',
  },

  label: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
    textAlign: 'left',
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

export default AddCustomerScreen;
