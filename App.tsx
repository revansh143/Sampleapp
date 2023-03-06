/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import  React from 'react';
import type {PropsWithChildren} from 'react';


import { Button, StyleSheet, Text, View } from 'react-native';


import AssetExample from './components/AssetExample';
import WelcomeScreen from './components/WelcomeScreen';
import DetailwelcomeScreen from './components/DetailwelcomeScreen';
import HomeVew from './components/HomeView';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style = {styles.buttonStyle}>Hello</Text>
      <Button
        title="Splash Screen"
        onPress={() => navigation.navigate('image')}
      />   
    </View>
  );
}


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={HomeScreen}  options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}/>
      <Stack.Screen name="image" component={WelcomeScreen} />
      <Stack.Screen name="detailimage" component={DetailwelcomeScreen} />
      <Stack.Screen name="HomePage" component={HomeVew} />

    </Stack.Navigator>
  );
}



function App(): JSX.Element {
  return (
    <NavigationContainer>
    <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  buttonStyle:{
    fontFamily: "Roboto-Italic",
    fontSize : 50,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

});

export default App;
