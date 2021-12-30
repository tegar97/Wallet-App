/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Signup} from './screens';
import Login from './screens/Auth/Login';
import Home from './screens/Main/Home';
import DetailCard from './screens/Main/Card/DetailCard';
import Transfer from './screens/Main/Transfer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeNonActive,
  IncomeStatNonActive,
  NotifyIconNonActive,
  SettingNotifyNonActive,
} from './theme/Icons';
import IncomeStats from './screens/Auth/IncomeStats';
import Notification from './screens/Main/Notification/Notification';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import {useRoute} from '@react-navigation/native';

const ScreenWithNavBottom = ({navigation}) => {
  const route = useRoute();

  console.log('new', route);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 78,
          position: 'absolute',
          bottom: 20,
          width: '90%',
          left: 20,
          borderRadius: 30,
          backgroundColor: '#2F1155',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,

          elevation: 13,
        },
      }}
      tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => {
            return <HomeNonActive />;
          },
        }}
      />
      <Tab.Screen
        name="IncomeStats"
        component={IncomeStats}
        options={{
          tabBarIcon: () => {
            return <IncomeStatNonActive />;
          },
        }}
      />
      <Tab.Screen
        name="Notify"
        component={Notification}
        options={{
          tabBarVisible: false, //like this

          tabBarIcon: () => {
            return <NotifyIconNonActive />;
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Home}
        options={{
          tabBarIcon: () => {
            return <SettingNotifyNonActive />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ScreemWithNavBottom"
          component={ScreenWithNavBottom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailCard"
          component={DetailCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
