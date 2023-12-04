import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const Tab = createBottomTabNavigator();
const BottomNavigation = ({route}) => {
    const {member} = route.params;
    console.log(member, "Line 10");
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'house-user';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user-alt' : 'user';
          }
          return <FontAwesome5 name={iconName} size={20} color={"black"} />;
        },
        tabBarLabelStyle: {
            color: 'black', 
            fontSize:18
          },
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false,}}  />
    <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}  initialParams={{ member: member }}/>
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
