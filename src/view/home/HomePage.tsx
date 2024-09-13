import {Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {globalStyles} from "../../constant";

const HomePage = () => {
    return (
        <View style={globalStyles.container}>
            <StatusBar style="auto"/>
            <Text>Home page</Text>
        </View>
    )
};

export default HomePage;