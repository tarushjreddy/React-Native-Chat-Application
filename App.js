import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/login";
import Register_screen from "./screens/Register_screen";

const Stack = createStackNavigator();
const golbalScreenOptions = {
  headerStyle: { backgroundColor: "#FE6F5E" },
  headerTitleStyle: { color: "white" },
  headerTintStyle: {
    color: "white",
  },
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={golbalScreenOptions}>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen
          name="Register"
          component={Register_screen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
