import * as React from "react";
import { Button, View, Text, TextInput, StyleSheet, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Buttonn } from "./Components/Buttonn";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AsyncStorage } from "react-native";
import { useState, useEffect } from 'react';




function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
        color="red"
        />
      <Button
        title="Forgot password"
        onPress={() => navigation.navigate("ForgotPassword")}
        color="black"
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
        />
    </View>
  );
}

function Register() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput placeholder="UserName" style={styles.input} />
      <TextInput placeholder="PassWord" style={styles.input} />
      <Buttonn >Register</Buttonn>
    </View>
  );
}
function ForgotPassword() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput placeholder="UserName" style={styles.input} />
      <Buttonn>Get passWord</Buttonn>
    </View>
  );
}
function Login({ navigation }) {
  const [account, setAccount] = useState("")
  const [password, setPassword] = useState("")
 
  const handleClick = ()=>{
    if( account && password){
    return navigation.navigate("HomePage")
  }
  else{
    return navigation.navigate("Home")
  }
}
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <TextInput placeholder="UserName" style={styles.input} onChangeText={setAccount} />
    <TextInput placeholder="PassWord" style={styles.input} onChangeText={setPassword} />
    <Buttonn  callback={handleClick} >Login</Buttonn>
  </View>
  );
}
function HomePage(){
  return(
   
     <ImageBackground source={require("./img/login.jpg")} resizeMode="cover" style={{width:"100%" , height:"100%"}}>
     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> HELLO</Text>
     </View>
     </ImageBackground>
    
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "70%",
    margin: 12,
    borderWidth: 0,
    paddingLeft: 50,
    borderRadius: 20,
    backgroundColor: "white",
  },
  btn: {
    width: "70%",
  },
  
});

export default App;