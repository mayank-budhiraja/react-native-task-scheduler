import 'react-native-gesture-handler';
import * as React from 'react';
import { View, StatusBar } from 'react-native';

//Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import AssignScreen from './src/Screens/Home'
import TaskScreen from './src/Screens/Task' 

//UI Components
import Theme from './src/Utils/Theme';
import { ThemeProvider } from 'styled-components';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <ApplicationProvider {...eva} theme={eva.light}>
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Home" component={AssignScreen} />
            <Stack.Screen name="Details" component={TaskScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>    
    </ApplicationProvider>
    </>
  );
}

