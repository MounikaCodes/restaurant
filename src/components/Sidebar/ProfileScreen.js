import React, {useState, useEffect} from 'react';
import {View, Image, Button, Alert, TouchableOpacity, Text} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {getToken, removeToken, getName} from '../../data/storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {openCamera} from 'react-native-image-crop-picker';

const ProfileScreen = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [token, setToken] = useState('');
  const [user_name, setUserName] = useState('');
  console.log(user_name, token);
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
    const fetchData = async () => {
      try {
        // Retrieve token when component mounts
        const userToken = await getToken();
        setToken(userToken);

        // Fetch image using token
        const response = await fetch(
          `https://mssriharsha.pythonanywhere.com/profile?token=${userToken}`,
        );
        if (response.ok) {
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
  useEffect(() => {
    fetchImage();
  }, []);
  const fetchImage = async () => {
    console.log('token--->', token);
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
  const handleCapture = async () => {
    const images = await openCamera({
      mediaType: 'photo',
      width: 500,
      height: 500,
      cropping: true,
    });
    console.log('file data', images);
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

  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
      {image ? (
        <Image source={{uri: image}} style={{width: 200, height: 200}} />
      ) : (
        <View style={{width: 200, height: 200, backgroundColor: 'lightgray'}} />
      )}
      <View>
        <Text style={{color: '#000', fontSize: 30, fontWeight: 'bold'}}>
          {user_name ? user_name : 'Mounika reddy'}
        </Text>
      </View>
      <View style={{display: 'flex', justifyContent: 'space-between'}}>
        <Button title="Upload Image" onPress={uploadImage} />
        <Button title="Capture Image" onPress={handleCapture} />
      </View>
    </View>
  );
};

export default ProfileScreen;
