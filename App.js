import React, { useState } from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from './src/pages/welcome/index'
import SignIn from './src/pages/signin/index'
import Cadastro from './src/pages/cadastro/index'
import Profile from './src/pages/profile/index'
import Comparativo from './src/pages/Comparativo/index'
import Ofertas from './src/pages/details/index'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
        <Stack.Navigator
    initialRouteName='Welcome'>
    
      <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false }}
    
      />

      <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{ headerShown: false }}
      />

      <Stack.Screen
      name="Cadastro"
      component={Cadastro}
      options={{ headerShown: false }}
      />

       <Stack.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: false }}
      />

      <Stack.Screen
      name="Comparativo"
      component={Comparativo}
      options={{ headerShown: false }}
      />

      <Stack.Screen
      name="Ofertas"
      component={Ofertas}
      options={{ headerShown: false }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}