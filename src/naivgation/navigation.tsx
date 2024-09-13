import LoginPage from "../view/auth/LoginPage";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import UserPage from "../view/user/UserPage";
import PageIndex from "../view";

const NonAuthStack = createNativeStackNavigator<RootStackNonAuth>();
const AuthStack = createNativeStackNavigator<RootStackAuth>();

export const NonAuthNavigator = () => (
    <NonAuthStack.Navigator>
        <NonAuthStack.Screen name="Login" component={LoginPage} options={{title: 'Login Screen', headerShown: false}}/>
    </NonAuthStack.Navigator>
)

export const AuthNavigator = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="PageIndex" component={PageIndex} options={{title: 'Home Screen', headerShown: false}}/>
        <AuthStack.Screen name="Users" component={UserPage} />
    </AuthStack.Navigator>
)
