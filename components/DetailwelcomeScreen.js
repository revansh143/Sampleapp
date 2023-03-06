import React  from 'react';
import { ImageBackground,StyleSheet,View,TextInput,Text,Button,Image, Alert } from 'react-native';
import bgcolors from '../config/bgcolors';
import HomeVew from './HomeView';

export default  function DetailwelcomeScreen({navigation}) {
    


    const [userEmail, setText] = React.useState('');
    const [userpwd, setPassword] = React.useState('');

    return (
      //<ImageBackground style={styles.background} source={require("../assets/snack-icon.png")}>
      <View>
        <View style={styles.textalign}>
        <Image style={styles.logo} source={require("../assets/snack-icon.png")}/>
          <Text>Welcome to Login page</Text>
        </View>
      
        <View style={styles.sectionStyle}>
          <Image
            source={
              require("../assets/call.png")
            }
            style={styles.imageStyle}
          />
          <TextInput
             style={styles.input}
             onChangeText={newText => setText(newText)}
             defaultValue={userEmail}
             placeholder="Email"
          />
        </View>
        <View style={styles.sectionStyle}>
          <Image
            source={
              require("../assets/call.png")
            }
            style={styles.imageStyle}
          />
          <TextInput
             style={styles.input}
             onChangeText={newText => setPassword(newText)}
             defaultValue={userpwd}
             placeholder="Password"
             keyboardType="numeric"
          />
        </View>
        <View style ={styles.textViewAlign}>
           <Button style = {styles.loginButtonSection}
         onPress={() => {
          if(userEmail == ""){
            Alert.alert("email empty")
          }else{
         console.log(userEmail);
         console.log(userpwd);
         navigation.navigate('HomePage')
           }
          }}
         title="Login"
         />
        </View>



        </View>
      // </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background:{
        flex : 1,
    },
    container: {
		marginTop: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		
    width: 350,
    height: 50
	},
    
    closebutton: {
        width : 50,
        height : 50,
        backgroundColor :  bgcolors.primary,
        position : "absolute",
        top : 30,
        left : 20
    },
    input: {
      flex : 1,
        height: 40,
        margin: 12,
        padding: 10,
        width:"75%"
      },
      icon:  {
        width: '10%',
        alignSelf: 'flex-start',
        width : 25,
        height : 25,
    },
    imageStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
    loginButtonSection: {
      width: 100,
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      fontFamily: "Roboto-Regular",
      fontSize : 20,

   },
      logo: {
        padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',     
            },
    sharebutton: {
        width : 200,
        height : 50,
        backgroundColor :  bgcolors.secondar,
        position : "absolute",
        alignItems: 'center',
    },
    sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#000',
      height: 40,
      borderRadius: 5,
      margin: 10,
      top: 100,
    },
    textalign:{
        position: "absolute",
        top : 0,   
        alignItems: "center",
         width: "100%",
     },
     textViewAlign:{
        top : 150,  
        width : "100%",
        position : "relative",
     },

})
