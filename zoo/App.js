import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './src/pages/splash'
import Home from './src/pages/home'
import Login from './src/pages/login'
import Cadastro from './src/pages/cadastro'
import Territorios from './src/pages/territorios'
import Mamiferos from './src/pages/mamiferos'
import Aves from './src/pages/aves'
import Repteis from './src/pages/repteis'
import Anfibios from './src/pages/anfibios'
import Peixes from './src/pages/peixes'
import Outros from './src/pages/outros'

const Stack = createNativeStackNavigator ();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash}
        options={{headerStyle:{backgroundColor:'#74FFA0'},headerTintColor:'black'}}/>

        <Stack.Screen name="Home" component={Home}
        options={{headerStyle:{backgroundColor:'#74FFA0'},headerTintColor:'black'}}/>

        <Stack.Screen name="Login" component={Login}
        options={{headerStyle:{backgroundColor:'#74FFA0'},headerTintColor:'black'}}/>

        <Stack.Screen name="Cadastro" component={Cadastro}
        options={{headerStyle:{backgroundColor:'#74FFA0'},headerTintColor:'black'}}/>

        <Stack.Screen name="Territorios" component={Territorios}
        options={{headerStyle:{backgroundColor:'#74FFA0'},headerTintColor:'black'}}/>

        <Stack.Screen name="Mamiferos" component={Mamiferos}
        options={{headerStyle:{backgroundColor:'#74FFA0'},headerTintColor:'black'}}/>

        <Stack.Screen name="Aves" component={Aves}
        options={{headerStyle:{backgroundColor:'#74FFA0'},headerTintColor:'black'}}/>

        <Stack.Screen name="Repteis" component={Repteis}
        options={{headerStyle:{backgroundColor:'#74FFA0'},headerTintColor:'black'}}/>

        <Stack.Screen name="Anfibios" component={Anfibios}
        options={{headerStyle:{backgroundColor:'#74FFA0'},headerTintColor:'black'}}/>

        <Stack.Screen name="Peixes" component={Peixes}
        options={{headerStyle:{backgroundColor:'#74FFA0'},headerTintColor:'black'}}/>

        <Stack.Screen name="Outros" component={Outros}
        options={{headerStyle:{backgroundColor:'#74FFA0'},headerTintColor:'black'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}