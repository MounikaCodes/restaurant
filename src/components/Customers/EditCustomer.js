import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {styles} from './EditCustomerStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getToken, removeToken} from '../../data/storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format, parse} from 'date-fns';

const EditCustomerScreen = ({route, navigation}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState(new Date());
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [DOBDate, setDOBDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    const {customerData} = route.params;

    console.log('Customer Data:', customerData);
    setName(customerData[1]);
    setMobile(customerData[3]);
    setEmail(customerData[2]);
    setDOBDate(customerData[4]);
    // Parse the date string to set the date object
    setDob(parse(customerData[4], 'dd-MM-yyyy', new Date()));
  }, []);

  const handleDOBChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString('en-GB');
      setDOBDate(formattedDate);
      setDob(selectedDate);
    }
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
  useEffect(() => {
    const fetchToken = async () => {
      const userToken = await getToken();
      setToken(userToken);
    };
    fetchToken();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const handleSave = customer => {
    if (!validateInputs()) {
      return;
    }
    console.log(customer[2], email);

    fetch('https://mssriharsha.pythonanywhere.com/customers', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customer_name: name,
        customer_phone: mobile,
        customer_email: email,
        customer_dob: format(dob, 'dd-MM-yyyy'),
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
        if (!data.customer_email) {
          Alert.alert('Failed to update data', data);
        } else {
          console.log('Customer Details Updated Succesfully', data);
          Alert.alert('Customer Details Updated Succesfully');
          navigation.navigate('Dashboard');
          resetFields();
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Show error alert message
        Alert.alert('Error', 'Network failed. Please try again later.');
      });
  };
  const validateInputs = () => {
    // Validate name
    if (!name || name.length > 50) {
      Alert.alert(
        'Error',
        'Name is required and should be up to 50 characters.',
      );
      return false;
    }

    // Validate mobile number
    if (!/^\d{10}$/.test(mobile)) {
      Alert.alert('Error', 'Mobile number should be a 10-digit number.');
      return false;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const validateEmail = email => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const resetFields = () => {
    setName('');
    setMobile('');
    setDob('');
    setEmail('');
    setDOBDate('');
  };
  return (
    <View style={styles.container}>
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
      {/* <Text style={styles.label}>Email-id:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor="#ccc"
        onChangeText={text => setEmail(text)}
        value={email}
      /> */}

      <Text style={styles.label}>Date of Birth:</Text>
      <TextInput
        style={styles.dateInput}
        placeholder="DD/MM/YYYY"
        placeholderTextColor="gray"
        value={DOBDate}
        onFocus={() => setShowDatePicker(true)}
      />
      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={handleDOBChange}
        />
      )}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditCustomerScreen;
