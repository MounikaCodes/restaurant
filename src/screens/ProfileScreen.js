import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getToken, removeToken} from '../data/storage';
import {styles} from './ProfileScreenStyles';
const ProfileScreen = ({navigation}) => {
  const [username, setUsername] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [dob, setDob] = useState('1990-01-01');
  const [mobile, setMobile] = useState('123-456-7890');
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
  const handleEdit = field => {
    console.log('Editing ' + field);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.profileImage}
        />
        <TouchableOpacity
          onPress={() => handleEdit('image')}
          style={styles.editIcon}>
          <FontAwesomeIcon icon={faEdit} size={20} color="#0000ff" />
        </TouchableOpacity>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Username:</Text>
        <TextInput
          style={styles.fieldInput}
          value={username}
          onChangeText={setUsername}
          editable={false}
        />
        <TouchableOpacity
          onPress={() => handleEdit('username')}
          style={styles.editIcon}>
          <FontAwesomeIcon icon={faEdit} size={20} color="#0000ff" />
        </TouchableOpacity>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Email:</Text>
        <TextInput
          style={styles.fieldInput}
          value={email}
          onChangeText={setEmail}
          editable={false}
        />
        <TouchableOpacity
          onPress={() => handleEdit('email')}
          style={styles.editIcon}>
          <FontAwesomeIcon icon={faEdit} size={20} color="#0000ff" />
        </TouchableOpacity>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Date of Birth:</Text>
        <TextInput
          style={styles.fieldInput}
          value={dob}
          onChangeText={setDob}
          editable={false}
        />
        <TouchableOpacity
          onPress={() => handleEdit('dob')}
          style={styles.editIcon}>
          <FontAwesomeIcon icon={faEdit} size={20} color="#0000ff" />
        </TouchableOpacity>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Mobile:</Text>
        <TextInput
          style={styles.fieldInput}
          value={mobile}
          onChangeText={setMobile}
          editable={false}
        />
        <TouchableOpacity
          onPress={() => handleEdit('mobile')}
          style={styles.editIcon}>
          <FontAwesomeIcon icon={faEdit} size={20} color="#0000ff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
