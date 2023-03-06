import React from 'react';
import { Image, ImageBackground,StyleSheet,View,Text,Button,button } from 'react-native';
import bgcolors from '../config/bgcolors';
import DetailwelcomeScreen from './DetailwelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();





export default function WelcomeScreen({navigation}) {
     return (
      <ImageBackground 
        style={styles.background}
        source={require("../assets/bg-1x.png")} >
<View style={styles.textalign}>
<Image style={styles.logo} source={require("../assets/snack-icon.png")}/>
        <Text>Wellcome to Login/Register page</Text>
</View>

         <View style={styles.loginButton}>
         <Button
        title="Login"
        onPress={() => navigation.navigate('detailimage')}
      />
         </View>
         <View style={styles.registerButton}>
         </View>
        </ImageBackground>
     );
  }
  const styles = StyleSheet.create({

    
    background:{
        flex: 1,
        justifyContent : "flex-end",
        alignItems: "center",
    },
    registerButton: {
        width : "100%",
        height : 70,
        backgroundColor : bgcolors.secondar,
    },
    logo: {
width: 100,
height: 100,

    },
    textalign:{
        position: "absolute",
        top : 100,   
        alignItems: "center",

     },
    loginButton: {
        width : "100%",
        height : 70,
        backgroundColor : bgcolors.primary,
    }
  })