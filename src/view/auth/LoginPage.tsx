import {
    Alert,
    Button,
    Image,
    Keyboard,
    Platform, Pressable, StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {StatusBar} from "expo-status-bar";
import {globalStyles} from "../../constant";
import React, {useState} from "react";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {IUserLogin} from "../../types";
import {apiLogin} from "../../services/user/user.service";
import {useDispatch} from "react-redux";
import {setAuthState} from "../../redux/auth.slice";

const LoginPage = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigation: NavigationProp<RootStackAuth> = useNavigation();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        setLoading(true);
        const user = username.trim();
        const pass = password.trim();
        setUsername(user);
        setPassword(pass);
        const payload: IUserLogin = {
            username: user,
            password: pass,
        }
        const response = await apiLogin(payload);
        if (response?.status === 200) {
            dispatch(setAuthState({
                token: response.data?.token,
                user: response.data,
            }))
        } else {
            Alert.alert(response.data)
        }
        setLoading(false);
    };

    const handleBlur = () => {
        setUsername(username.trim());
        setPassword(password.trim());
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <StatusBar style="auto"/>
                <Image style={styles.logo} source={require('../../../assets/Care_ 白弦.jpeg')}/>
                <TouchableOpacity>
                    <Text style={globalStyles.globalFont}>Phone OS {Platform.OS}. Welcome to my app!</Text>
                </TouchableOpacity>
                <Text style={styles.titleLogin}>Login</Text>
                <TextInput style={styles.inputText}
                           placeholder="username"
                           value={username}
                           onChangeText={setUsername}
                           onBlur={handleBlur}
                />
                <TextInput style={styles.inputText}
                           placeholder="password"
                           value={password}
                           onChangeText={setPassword}
                           onBlur={handleBlur}
                />

                <View style={styles.btn} accessible={true}>
                    <Button title="Login" onPress={() => handleLogin()}/>
                </View>

                <View>
                    <Text style={[styles.center, styles.viewDefault]}>Your phone is</Text>
                    <View style={styles.contentPress}>
                        <Pressable
                            style={({pressed}) => [
                                styles.button,
                                pressed ? styles.pressedButton : styles.normalButtonAndroid,
                            ]}
                        >
                            <Text style={styles.buttonText}>Android</Text>
                        </Pressable>

                        <Pressable
                            style={({pressed}) => [
                                styles.button,
                                pressed ? styles.pressedButton : styles.normalButtonIOS,
                            ]}
                        >
                            <Text style={styles.buttonText}>IOS</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default LoginPage;

const styles = StyleSheet.create({
    titleLogin: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 30,
    },
    center: {
        textAlign: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        width: 100
    },
    normalButtonAndroid: {
        backgroundColor: Platform.select({
            android: '#8e82ff',
            ios: '#616161'
        }),
    },
    normalButtonIOS: {
        backgroundColor: Platform.select({
            ios: '#8e82ff',
            android: '#616161',
        }),
    },
    pressedButton: {
        backgroundColor: '#4e478e',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    logo: {
        width: 250,
        height: 250,
    },
    btn: {
        marginTop: 25,
        width: 100,
    },
    inputText: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'gray',
        borderRadius: 5,
        width: 250,
        marginTop: 20,
        padding: 5,
        paddingHorizontal: 12
    },
    viewDefault: {
        marginTop: 20,
        marginBottom: 10,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contentPress: {
        marginTop: 10,
        width: 350,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});