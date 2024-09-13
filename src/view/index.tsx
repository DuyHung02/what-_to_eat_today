import React from "react";
import UserPage from "./user/UserPage";
import SettingPage from "./setting/SettingPage";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomePage from "./home/HomePage";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator<RootStackAuth>();

const PageIndex = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                paddingTop: 7,
                paddingBottom: 10,
                height: 60,
            }
        }}>
            <Tab.Screen name="Users" component={UserPage} options={{
                tabBarLabel: 'Users',
                tabBarIcon: ({color}) => (
                    <FontAwesome5 name="home" color={color} size={30}/>
                )
            }}/>
            <Tab.Screen name="Home" component={HomePage} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (
                    <FontAwesome5 name="users" color={color} size={30}/>
                )
            }}/>
            <Tab.Screen name="Settings" component={SettingPage} options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({color}) => (
                    <MaterialIcons name="settings" color={color} size={30}/>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default PageIndex;