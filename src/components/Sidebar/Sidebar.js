import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Button, Image, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './SidebarStyles';
import {launchImageLibrary} from 'react-native-image-picker';
import {getToken, removeToken, getName} from '../../data/storage';

const Sidebar = ({isOpen, onClose}) => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [token, setToken] = useState('');
  const [user_name, setUserName] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve token when component mounts
        const userToken = await getToken();
        setToken(userToken);
        const response = await fetch(
          `https://mssriharsha.pythonanywhere.com/profile?token=${userToken}`,
        );
        if (response.ok) {
          console.log('response is ook');
          const blob = await response.blob();
          const reader = new FileReader();
          reader.onload = () => {
            const base64ImageData = reader.result.split(',')[1]; // Extract base64 data
            const uri = `data:${response.headers.get(
              'Content-Type',
            )};base64,${base64ImageData}`;
            setImage(uri);
          };
          reader.readAsDataURL(blob);
        } else {
          console.error('Failed to fetch image');
        }

        // Fetch user name
        const userName = await getName();
        setUserName(userName);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchName = async () => {
      const userName = await getName();
      setUserName(userName);
    };
    fetchName();
  });
  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      sectionLimit: 1,
      mediaType: 'photo',
      includedBase64: false,
    },
  };
  const uploadImage = async () => {
    const images = await launchImageLibrary(options);
    console.log('file data', images.assets[0]);
    const formData = new FormData();
    formData.append('token', token);
    formData.append('pic', {
      uri: images.assets[0].uri,
      type: 'image/jpeg',
      // type: images.assets[0].type,
      name: images.assets[0].fileName,
    });

    try {
      const response = await fetch(
        `https://mssriharsha.pythonanywhere.com/profile?token=${token}`,
        {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      if (response.ok) {
        setImage(response.url);
        console.log('response is ook');
        Alert.alert('Success', 'Image uploaded successfully!');
        fetchImage();
      } else {
        console.error('Failed to upload image');
        Alert.alert('Error', 'Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert('Error', 'Error uploading image');
    }
  };
  const handleItemClick = screen => {
    if (
      screen === 'ProfileScreen' ||
      screen === 'SendMessageToSelected' ||
      screen === 'SendMessage'
    ) {
      navigation.navigate(screen);
      // setIsProfileClicked(!isProfileClicked);
    } else {
      onClose();
      navigation.navigate(screen);
    }
  };
  const handleLogout = async () => {
    await removeToken();
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };
  useEffect(() => {
    fetchImage();
  }, []);
  const fetchImage = async () => {
    try {
      const response = await fetch(
        `https://mssriharsha.pythonanywhere.com/profile?token=${token}`,
      );
      if (response.ok) {
        console.log('response is ook');
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onload = () => {
          const base64ImageData = reader.result.split(',')[1]; // Extract base64 data
          const uri = `data:${response.headers.get(
            'Content-Type',
          )};base64,${base64ImageData}`;
          setImage(uri);
        };
        reader.readAsDataURL(blob);
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <View
      style={[styles.sidebarContainer, {display: isOpen ? 'flex' : 'none'}]}>
      <View style={styles.fullContainer}>
        <View style={styles.logoContainer}>
          {image ? (
            <Image source={{uri: image}} style={styles.logo} />
          ) : (
            <Image
              source={require('../../assets/pllogo.jpg')}
              style={styles.logo}
            />
          )}
          <TouchableOpacity onPress={uploadImage} style={styles.editIcon}>
            <Icon name="edit-square" size={25} color="#073d94" />
          </TouchableOpacity>
        </View>
        <Text style={styles.userName}>
          {user_name ? user_name : 'Mounika reddy'}
        </Text>
        <View style={styles.links}>
          {/* <TouchableOpacity
            onPress={() => handleItemClick('ProfileScreen')}
            style={[styles.sidebarButton, styles.sidebarButtonLarge]}>
            <Text style={styles.sidebarItem}>Profile</Text>
            <Icon
              name="play-arrow"
              // name={isBDayMsgClicked ? 'arrow-drop-up' : 'arrow-drop-down'}
              size={25}
              color="#073d94"
              style={{marginLeft: '62%'}}
            />
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => handleItemClick('SendMessageToSelected')}
            style={[styles.sidebarButton, styles.sidebarButtonLarge]}>
            <Text style={styles.sidebarItem}>Birthday Messages</Text>
            <Icon
              name="play-arrow"
              // name={isProfileClicked ? 'arrow-drop-up' : 'arrow-drop-down'}
              size={25}
              color="#073d94"
              style={{marginLeft: '28%'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleItemClick('SendMessage')}
            style={[styles.sidebarButton, styles.sidebarButtonLarge]}>
            <Text style={styles.sidebarItem}>General Messages</Text>
            <Icon
              name="play-arrow"
              // name={isMsgToAll ? 'arrow-drop-up' : 'arrow-drop-down'}
              size={25}
              // color="#073d94"
              style={{marginLeft: '30%', color: '#073d94'}}
            />
          </TouchableOpacity>

          {/* {isMsgToAll && (
        <View style={styles.dropdownContainer}>
          <TouchableOpacity
            onPress={() => handleItemClick('OutForDelivery')}
            style={[styles.dropdownButton, styles.dropdownButtonLarge]}>
            <Text style={styles.dropdownItem}>Out For Service</Text>
            <Icon
              name="play-arrow"
              size={20}
              color="#073d94"
              style={{marginLeft: '41%', marginTop: '3%'}}
            />
          </TouchableOpacity>
        </View>
      )} */}

          <TouchableOpacity onPress={handleLogout}>
            <Icon name="logout" size={30} style={styles.logoutIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Sidebar;
