import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,SafeAreaView } from 'react-native'

export default function Experience(props) {
  return (

      <View style={{ flex: 1, flexDirection: 'Column'}}>
       <View style={{ flexDirection:'row',  width: '100%', height: '15%', backgroundColor: 'powderblue'}} >
          <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {
                     () => props.navigation.navigate("Education")
                  }>
                  <Text style = {styles.submitButtonText}> Go to Education</Text>
            </TouchableOpacity>
            <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {
                     () => props.navigation.navigate("Info")
                  }>
                  <Text style = {styles.submitButtonText}> Go to Information</Text>
            </TouchableOpacity>
            <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {
                     () => props.navigation.navigate("Contact")
                  }>
                  <Text style = {styles.submitButtonText}> Go to Contact</Text>
            </TouchableOpacity>
            </View>
            
            <View style={{ flexDirection:'row', alignContent:"center", margin:'12%', width: '100%',alignItems:"center", alignSelf:"center", height: '25%', backgroundColor:'lightpink'}}>
                <Text style = {styles.login}>
                    Experience is Under Construction.
                </Text>
            </View>
      </View>
  );
}




const styles = StyleSheet.create({
    
    submitButton: {
       alignSelf:"center",  
        padding:10,
       borderColor:"#456bad",
       borderRadius:5,
       width:"auto",
       margin:"12%",
       alignSelf:"center",
    
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
    fontWeight: 'bold',
    width:'100%'
  }
})