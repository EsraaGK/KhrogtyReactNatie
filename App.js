import React from "react";
import { View, Text } from "react-native";

import { createStackNavigator, createAppContainer,
  initialRouteName , createSwitchNavigator} from "react-navigation";

import SplashScreen from './SplashScreen'

import One from './OnBoardScreens/One';
import Two from './OnBoardScreens/Two';
import three from './OnBoardScreens/three';

import Mother from './Mother'
import PlacesScreen from './PlacesScreen'
import TodoScreen from './TodoScreen'
import ResturaceScreen from './ResturaceScreen'
import PlaceDetails from './PlaceDetails'
import Searching from './Searching'
import CardDetails from './CardDetails'
const AppNavigator = createStackNavigator({
 

   Mother:Mother,
   PlacesScreen:PlacesScreen,
   TodoScreen:TodoScreen,
   ResturaceScreen:ResturaceScreen, 
   PlaceDetails:PlaceDetails, 
   CardDetails:CardDetails,
   Searching: Searching
  }
);

const AppStack = createSwitchNavigator({
  SplashScreen:SplashScreen,

   One:One,
   Two:Two,
   three:three,
   AppNavigator:AppNavigator
});

class App extends React.Component {
  render() {
    return (
       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
         <Text>Home Screen</Text>
        
       </View>
    );
  }
}




export default createAppContainer(AppStack);