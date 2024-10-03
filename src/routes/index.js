import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/welcome/index';
import SignIn from '../pages/signin/index';
import Cadastro from '../pages/cadastro/index';
import Profile from '../pages/profile/index';
import Comparativo from '../pages/Comparativo/index';
import Ofertas from '../../src/pages/details/index.js';
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitle: '', 
        headerShown: false, 
      }}>
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
  );
}
