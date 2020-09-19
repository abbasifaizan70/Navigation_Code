import 'react-native-gesture-handler';

import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Info from './Info';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';


const Stack = createStackNavigator();

function Resumes() {
  return (
    <Stack.Navigator>
       
       <Stack.Screen
        name="Education"
        component={Education}
        options={{
          title: 'Education', //Set Header Title
        }}/>

      <Stack.Screen
        name="Info"
        component={Info}
        options={{
          title: 'Information', //Set Header Title
        }}/>
       

      <Stack.Screen
        name="Experience"
        component={Experience}
        options={{
          title: 'Experience', //Set Header Title
        }}/>

        <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          title: 'Contact', //Set Header Title
        }}/>
        </Stack.Navigator>
  );
}

export default Resumes;