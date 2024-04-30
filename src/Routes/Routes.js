import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../components/InitialScreens/LoginScreen';
import DashboardScreen from '../components/InitialScreens/DashboardScreen';
import AddCustomerScreen from '../components/Customers/AddCustomer';
import SendMessageScreen from '../components/Sidebar/SendMessage';
import SendMessageToSelectedScreen from '../components/Sidebar/SendMessageToSelected';
import SettingsScreen from '../components/Sidebar/Settings';
import ProfileScreen from '../components/Sidebar/ProfileScreen';
import OtherSettingsScreen from '../components/Sidebar/OthersScreen';
import ChangePasswordScreen from '../components/InitialScreens/ChangePassword';
import ForgotPasswordScreen from '../components/InitialScreens/ForgotPassword';
import RegistrationScreen from '../components/InitialScreens/RegisterationScreen';
import EditCustomer from '../components/Customers/EditCustomer';
import Sidebar from '../components/Sidebar/Sidebar';

export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            headerTitle: '',
            headerStyle: {backgroundColor: '#ffffff'},
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Sidebar"
          component={Sidebar}
          options={{
            headerTitle: '',
            headerStyle: {backgroundColor: '#ff8a3d'},
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen
          name="AddCustomers"
          component={AddCustomerScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SendMessage"
          component={SendMessageScreen}
          options={{
            headerTitle: 'Send Message To All',
            headerStyle: {backgroundColor: '#073d94'},
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="SendMessageToSelected"
          component={SendMessageToSelectedScreen}
          options={{
            headerTitle: 'Message To  Selected Customers',
            headerStyle: {backgroundColor: '#073d94'},
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerTitle: 'Settings',
            headerStyle: {backgroundColor: '#073d94'},
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerTitle: 'Profile',
            headerStyle: {backgroundColor: '#073d94'},
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="OthersScreen"
          component={OtherSettingsScreen}
          options={{
            headerTitle: 'Other Settings',
            headerStyle: {backgroundColor: '#073d94'},
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
          options={{
            headerTitle: 'Change password',
            headerStyle: {backgroundColor: '#073d94'},
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotScreen"
          component={ForgotPasswordScreen}
          options={{
            headerTitle: 'Reset Password',
            headerStyle: {backgroundColor: '#073d94'},
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="EditCustomer"
          component={EditCustomer}
          options={{
            headerTitle: 'Update Customer Details',
            headerStyle: {backgroundColor: '#073d94'},
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
