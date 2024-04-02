import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AddCustomerScreen from '../screens/AddCustomer';
import SettingsScreen from '../screens/Settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllCustomersScreen from '../screens/AllCustomers';
import SendMessageScreen from '../screens/SendMessage';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomIcon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyles,
        // tabBarBackground: () => (
        //   <BlurView
        //     overlayColor=""
        //     blurAmount={15}
        //     style={styles.BlurViewStyles}
        //   />
        // ),
      }}>
      <Tab.Screen
        name="Customer"
        component={AllCustomersScreen}
        options={{
          tabBarIcon: ({focus, color, size}) => (
            <CustomIcon name="home" size={25} color={focus ? 'red' : 'gray'} />
          ),
        }}></Tab.Screen>
      <Tab.Screen name="Messages" component={SendMessageScreen}></Tab.Screen>
      <Tab.Screen name="Settings" component={SettingsScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyles: {
    height: 80,
    position: 'absolute',
    backgroundColor: '#000',
    borderTop: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
