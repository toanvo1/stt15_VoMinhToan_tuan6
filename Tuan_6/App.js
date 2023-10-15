import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import Screen1 from "./Source/Screen1"
import Screen2 from "./Source/Screen2"
import Screen3 from "./Source/Screen3"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Screen1" component={Screen1}/>
        <Stack.Screen name="Screen2" component={Screen2}/>
        <Stack.Screen name="Screen3" component={Screen3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}