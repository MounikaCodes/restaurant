import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './src/Navigation/TabNavigator';
import LoginScreen from "./src/screens/LoginScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import AllCustomersScreen from './src/screens/AllCustomers';
import AddCustomerScreen from './src/screens/AddCustomer';
import SendMessageScreen from './src/screens/SendMessage';
import SendMessageToSelectedScreen from './src/screens/SendMessageToSelected';
import SettingsScreen from './src/screens/Settings';
import ProfileScreen from './src/screens/ProfileScreen';
import OtherSettingsScreen from './src/screens/OthersScreen';
import ChangePasswordScreen from './src/screens/ChangePassword';
import ForgotPasswordScreen from './src/screens/ForgotPassword';
import RegistrationScreen from './src/screens/RegisterationScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ 
          headerTitle: 'Dashboard' ,
          headerStyle: { backgroundColor: '#073d94' },
          headerTitleAlign: 'center',
          headerTintColor:"#fff"}} />
        <Stack.Screen  name = "AllCustomers" component = {AllCustomersScreen} options={{ 
          headerTitle: 'All Customers' ,
          headerStyle: { backgroundColor: '#073d94' },
          headerTitleAlign: 'center',
          headerTintColor:"#fff"}}/>
        <Stack.Screen name="AddCustomers" component={AddCustomerScreen} options={{ 
          headerTitle: 'Add a Customers' ,
          headerStyle: { backgroundColor: '#073d94' },
          headerTitleAlign: 'center',
          headerTintColor:"#fff"}} />
        <Stack.Screen name="SendMessage" component={SendMessageScreen} options={{ 
          headerTitle: 'Send Message To All' ,
          headerStyle: { backgroundColor: '#073d94' },
          headerTitleAlign: 'center',
          headerTintColor:"#fff"}} />
        <Stack.Screen name="SendMessageToSelected" component={SendMessageToSelectedScreen} options={{ 
          headerTitle: 'Message To  Selected Customers' ,
          headerStyle: { backgroundColor: '#073d94' },
          headerTitleAlign: 'center',
          headerTintColor:"#fff"}} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ 
          headerTitle: 'Settings' ,
          headerStyle: { backgroundColor: '#073d94' },
          headerTitleAlign: 'center',
          headerTintColor:"#fff"}} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ 
          headerTitle: 'Profile' ,
          headerStyle: { backgroundColor: '#073d94' },
          headerTitleAlign: 'center',
          headerTintColor:"#fff"}} />
        <Stack.Screen name="OthersScreen" component={OtherSettingsScreen} options={{ 
          headerTitle: 'Other Settings' ,
          headerStyle: { backgroundColor: '#073d94' },
          headerTitleAlign: 'center',
          headerTintColor:"#fff"}} />
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{ 
          headerTitle: 'Change password' ,
          headerStyle: { backgroundColor: '#073d94' },
          headerTitleAlign: 'center',
          headerTintColor:"#fff"}} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ 
          headerTitle: 'Register here' ,
          headerStyle: { backgroundColor: '#073d94' },
          headerTitleAlign: 'center',
          headerTintColor:"#fff"}}/>
        <Stack.Screen name="ForgotScreen" component={ForgotPasswordScreen} options={{ 
          headerTitle: 'Reset Password' ,
          headerStyle: { backgroundColor: '#073d94', },
          headerTitleAlign: 'center',
          headerTintColor:"#fff"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
