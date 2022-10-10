import React from "react";
import { Text, View, StyleSheet,TouchableOpacity,SafeAreaView } from 'react-native';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import{createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from 'react-native-vector-icons/FontAwesome5';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
//Screens

 import Proximamente from "./Components/Proximamente";
  import MenuPrincipal from "./Components/MenuPrincipal";
 import Peliculas from "./Components/Peliculas";
 import Series from "./Components/Series";


 const HomeStackNavigator = createNativeStackNavigator();

 function MyStack() {
   return(
     <HomeStackNavigator.Navigator
     initialRouteName="Menu">
     <HomeStackNavigator.Screen name="Menu"
     component={MenuPrincipal}
     options={{headerBackTitleVisible: false,
      headerTitleAlign:'center',
      headerStyle:{backgroundColor:"#29E4EA"}}}/>

     <HomeStackNavigator.Screen name="Peliculas"
     component={Peliculas}
      options={{headerBackTitleVisible: false,
      headerTitleAlign:'center',
      headerStyle:{backgroundColor:"#29EAAA"}}}/>

     <HomeStackNavigator.Screen name="Series"
     component={Series}
     options={{headerBackTitleVisible: false,
      headerTitleAlign:'center',
      headerStyle:{backgroundColor:"#29EAAA"}}}/>

      <HomeStackNavigator.Screen name="Proximamente"
     component={Proximamente}
     options={{headerBackTitleVisible: false,
      headerTitleAlign:'center',
      headerStyle:{backgroundColor:"#29EAAA"}}}/>


     </HomeStackNavigator.Navigator>

   )
 }

 const Tab = createBottomTabNavigator();

 function MyTabs() {

    return(
      <Tab.Navigator
      initialRouteName="peliculas"
      
      screenOptions={{
  
        tabBarInactiveBackgroundColor:'white',
        tabBarInactiveTintColor:'#3D975F'
       
      
      }}
      >

       <Tab.Screen name="proximamente" component={Proximamente}
       options={{
         tabBarLabel:'Proximamente',
         tabBarIcon:({color,size}) => (
       <Foundation name="next" color={color} size={size}></Foundation>
         ),
         headerShown:false,
       }} />

       <Tab.Screen name="MenuPrincipal" component={MyStack}
       options={{
         tabBarLabel:'Inicio',
         tabBarIcon:({color,size}) => (
       <Home name="home" color={color} size={size}></Home>
         ),
         headerShown:false,
       }} />

       <Tab.Screen name="peliculas" component={Peliculas} 
       options={{
         tabBarLabel:'Peliculas',
         tabBarIcon:({color,size}) => (
       <MaterialIcons name="local-movies" color={color} size={size}></MaterialIcons>
         ),
         headerShown:false,
       }}/>

        <Tab.Screen name="series" component={Series} options={{
         tabBarLabel:'Series',
         tabBarIcon:({color,size}) => (
       <Ionicons name="tv-sharp" color={color} size={size}></Ionicons>
         ),
         headerShown:false,
       }} />

      </Tab.Navigator>

    );
 }
 export default function Navigation(){
    return(

      
       <NavigationContainer>
       <MyTabs />
       </NavigationContainer>
      
     
    );
 }


