import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

export default function Login(props) {
  return (
    <View style = {styles.container}>
            <Text  style = {styles.login}> Login</Text>
            
            <View style={{flex: 1, marginHorizontal:50}}>
               <TextInput style = {styles.input}
                  placeholder = "UserName "
                  placeholderTextColor = "#8f9da9"
                  />
               
               <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Password"
                  placeholderTextColor = "#8f9da9"
                  />
               
               <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {
                     () => props.navigation.navigate("Resumes")
                  }>
                  <Text style = {styles.submitButtonText}> Go to Home</Text>
               </TouchableOpacity>
            </View>
         </View>
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