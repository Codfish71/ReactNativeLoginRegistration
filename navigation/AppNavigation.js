import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import WelcomeScreen from "../screens/WelcomScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (<NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Home" options={{headerShown:false}} component={Home}></Stack.Screen>
            <Stack.Screen name="Login" options={{headerShown:false}} component={Login}></Stack.Screen>
            <Stack.Screen name="SignUp" options={{headerShown:false}} component={SignUp}></Stack.Screen>
            <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    )
}