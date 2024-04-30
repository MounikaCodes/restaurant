import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (error) {
    console.error('Error getting token from AsyncStorage:', error);
    return null;
  }
};

// Function to remove token from AsyncStorage
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
    console.log('Token removed from AsyncStorage');
  } catch (error) {
    console.error('Error removing token from AsyncStorage:', error);
  }
};

export const getName = async () => {
  try {
    const user_name = await AsyncStorage.getItem('user_name');
    return user_name;
  } catch (error) {
    console.error('Error getting token from AsyncStorage:', error);
    return null;
  }
};
