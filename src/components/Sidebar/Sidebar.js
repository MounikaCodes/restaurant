import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './SidebarStyles';
const Sidebar = ({isOpen, onClose}) => {
  const navigation = useNavigation();
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const [isBDayMsgClicked, setIsBDayMsgClicked] = useState(false);
  const [isMsgToAll, setIsMsgToAll] = useState(false);

  const handleItemClick = screen => {
    if (
      screen === 'ProfileScreen' ||
      screen === 'SendMessageToSelectedScreen' ||
      screen === 'SendMessageScreen'
    ) {
      navigation.navigate(screen);
      // setIsProfileClicked(!isProfileClicked);
    } else {
      onClose();
      navigation.navigate(screen);
    }
  };
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };
  return (
    <View
      style={[styles.sidebarContainer, {display: isOpen ? 'flex' : 'none'}]}>
      <Image source={require('../../assets/pllogo.jpg')} style={styles.logo} />

      <TouchableOpacity
        onPress={() => handleItemClick('ProfileScreen')}
        style={[styles.sidebarButton, styles.sidebarButtonLarge]}>
        <Text style={styles.sidebarItem}>Profile</Text>
        <Icon
          name={isBDayMsgClicked ? 'arrow-drop-up' : 'arrow-drop-down'}
          size={30}
          color="#406792"
          style={{marginLeft: '60%'}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleItemClick('')}
        style={[styles.sidebarButton, styles.sidebarButtonLarge]}>
        <Text style={styles.sidebarItem}>Birthday Messages</Text>
        <Icon
          name={isProfileClicked ? 'arrow-drop-up' : 'arrow-drop-down'}
          size={30}
          color="#406792"
          style={{marginLeft: '38%'}}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleItemClick('')}
        style={[styles.sidebarButton, styles.sidebarButtonLarge]}>
        <Text style={styles.sidebarItem}>General Messages</Text>
        <Icon
          name={isMsgToAll ? 'arrow-drop-up' : 'arrow-drop-down'}
          size={30}
          // color="#406792"
          style={{marginLeft: '37%', color: '#406792'}}
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
              color="#406792"
              style={{marginLeft: '41%', marginTop: '3%'}}
            />
          </TouchableOpacity>
        </View>
      )} */}

      <TouchableOpacity onPress={handleLogout}>
        <Icon name="logout" size={30} style={styles.logoutIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Sidebar;
