import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login'
import Logic from './pages/Resumes'
import Resumes from './pages/Resumes';


const Stack = createStackNavigator();;

export default function App() {
   return (
     
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Resumes"
          component={Resumes}
        />
        </Stack.Navigator>
       
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
     paddingTop:180,
     backgroundColor:"#42344d",
     height:'auto',
     flex:1
  },
  input: {
     width:"100%",
     margin:15,
     padding:15,
     height:50,
     alignSelf:"center",
     borderColor: '#282132',
     borderWidth: 2,
     borderRadius:5,
     backgroundColor:"#2a2739",
  },
  submitButton: {
     alignSelf:"center",  
     padding: 15,
     borderColor:"#456bad",
     borderRadius:5,
     width:"100%",
     margin:15,
     height: 50,
     backgroundColor:'#63a4da',
     borderWidth:3
  },
  submitButtonText:{
     color: 'white',
     textAlign: 'center',
     backgroundColor:'#63a4da'
     
  },
  login:{
    color:"white",
    textAlign: 'center',
    fontSize:35,
    fontWeight: 'bold'
  }
})