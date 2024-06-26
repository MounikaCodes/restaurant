/*
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/components/screens/LoginScreen';
import DashboardScreen from './src/components/screens/DashboardScreen';
import AllCustomersScreen from './src/components/screens/AllCustomers';
import AddCustomerScreen from './src/components/screens/AddCustomer';
import SendMessageScreen from './src/components/screens/SendMessage';
import SendMessageToSelectedScreen from './src/components/screens/SendMessageToSelected';
import SettingsScreen from './src/components/screens/Settings';
import ProfileScreen from './src/components/screens/ProfileScreen';
import OtherSettingsScreen from './src/components/screens/OthersScreen';
import ChangePasswordScreen from './src/components/screens/ChangePassword';
import ForgotPasswordScreen from './src/components/screens/ForgotPassword';
import RegistrationScreen from './src/components/screens/RegisterationScreen';
import EditCustomer from './src/components/screens/EditCustomer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            headerTitle: 'Dashboard',
            headerStyle: {backgroundColor: '#073d94'},
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="AllCustomers"
          component={AllCustomersScreen}
          options={{
            headerTitle: 'All Customers',
            headerStyle: {backgroundColor: '#073d94'},
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="AddCustomers"
          component={AddCustomerScreen}
          options={{
            headerTitle: 'Add a Customers',
            headerStyle: {backgroundColor: '#073d94'},
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
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
    </NavigationContainer>
  );
};

export default App;

*/

import React from 'react';
import Routes from './src/Routes/Routes';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
