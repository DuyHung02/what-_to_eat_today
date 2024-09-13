import {Button, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {globalStyles} from "../../constant";
import {StatusBar} from "expo-status-bar";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {clearAuthState} from "../../redux/auth.slice";
import {Avatar} from "react-native-paper";

const SettingPage = () => {
    const navigation: NavigationProp<RootStackAuth> = useNavigation();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        dispatch(clearAuthState())
    }
    return (
        <View style={globalStyles.container}>
            <StatusBar style="auto"/>
            <View>
                <Avatar.Image size={24} source={require('../../../assets/Care_ 白弦.jpeg')} />
            </View>
            <Text>Settings page</Text>
            <View>
                <Button title="users" onPress={() => navigation.navigate('Users')} />
                <Button title="logout" onPress={handleLogout} />
            </View>
        </View>
    )
};

export default SettingPage;