import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import Login from '../screen/Login';


const Tab = createStackNavigator();
const StackNavigationTab = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName='Login'>
            <Tab.Screen name='Login' component={Login} options={{headerShown:false}}/>
            <Tab.Screen name='BottomTab' component={BottomNavigation} options={{headerShown:false}}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigationTab

const styles = StyleSheet.create({})