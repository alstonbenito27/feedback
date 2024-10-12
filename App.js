// navigation/AppNavigator.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from './components/form';
import ResponseScreen from './components/ResponseScreen';
import { ImageBackground } from 'react-native';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Response" component={ResponseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default AppNavigator;
