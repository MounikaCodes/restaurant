import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
        <Stack.Screen  name = "AllCustomers" component = {AllCustomersScreen} options = {{title : 'All Customers'}}/>
        <Stack.Screen name="AddCustomers" component={AddCustomerScreen} options={{ title: 'Add Customers' }} />
        <Stack.Screen name="SendMessage" component={SendMessageScreen} options={{ title: 'Send Message To All' }} />
        <Stack.Screen name="SendMessageToSelected" component={SendMessageToSelectedScreen} options={{ title: 'Send Message To Selected Customers' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profile' }} />
        <Stack.Screen name="OthersScreen" component={OtherSettingsScreen} options={{ title: 'Other Settings' }} />
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{ title: 'Change Password' }} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{title:'Register Here'}}/>
        <Stack.Screen name="ForgotScreen" component={ForgotPasswordScreen} options={{ title: 'Forgot Password' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
