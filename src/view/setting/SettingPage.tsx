import {Button, View, StyleSheet, Keyboard, TouchableWithoutFeedback, Text} from "react-native";
import React from "react";
import {StatusBar} from "expo-status-bar";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {clearAuthState} from "../../redux/auth.slice";
import {Avatar, Card, IconButton} from "react-native-paper";
import {RootState} from "../../redux/store";
import HaruSelectOption from "../../components/commons/input/HaruSelectOption";
import {GENDER_OPTIONS} from "../../constant/common";
import HaruInputText from "../../components/commons/input/HaruInputText";
import HaruInputDate from "../../components/commons/input/HaruInputDate";
import {Controller, useForm} from "react-hook-form";
import HaruBtnSubmit from "../../components/commons/button/HaruBtnSubmit";

const SettingPage = () => {
    const navigation: NavigationProp<RootStackAuth> = useNavigation();
    const dispatch = useDispatch();
    const userState = useSelector((state: RootState) => state.auth.user);
    const {handleSubmit, control, formState: {errors}} = useForm();

    const handleLogout = async () => {
        dispatch(clearAuthState())
    }

    const saveData = (data: any) => {
        console.log('save')
        console.log(data);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <StatusBar style="auto"/>
                <View style={styles.contentHeader}>
                    <Card.Title
                        titleVariant="titleLarge"
                        title="Haru Dang"
                        titleStyle={styles.infoName}
                        subtitle="harudang2310@gmail.com"
                        left={(props) => <Avatar.Image {...props}
                                                       size={50}
                                                       source={require('../../../assets/Care_ 白弦.jpeg')}
                        />}
                        right={(props) => <IconButton {...props}
                                                      icon="application-edit"
                                                      onPress={() => {
                                                      }}
                        />}
                    />
                </View>
                <View style={styles.content}>
                    <View style={styles.content1}>
                        <Controller
                            control={control}
                            name="phone_number"
                            rules={{required: "Phone number is required"}}
                            render={({field: {onChange, value}}) => (
                                <HaruInputText label="Phone number"
                                               value={value}
                                               onChange={onChange}
                                               errorMessage={
                                                   errors?.phone_number?.message ?
                                                       errors.phone_number.message + '' :
                                                       undefined
                                               }
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="birhtday"
                            render={({field: {onChange, value}}) => (
                                <HaruInputDate label="Birhtday" value="2002/10/23" onChange={() => {
                                }}/>
                            )}
                        />

                        <Controller
                            control={control}
                            name="gender"
                            render={() => (
                                <HaruSelectOption value={userState.gender} items={GENDER_OPTIONS}/>
                            )}
                        />
                    </View>
                    <View>
                        <HaruBtnSubmit label="Save"
                                       onSubmit={handleSubmit(saveData)}/>
                    </View>
                </View>
                <View style={styles.contentFooter}>
                    {/*<Button title="users" onPress={() => navigation.navigate('Users')}/>*/}
                    {/*<Button title="logout" onPress={handleLogout}/>*/}
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default SettingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'space-between',
    },
    contentHeader: {
        marginTop: 30,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },
    infoName: {
        fontWeight: "600"
    },
    content: {
        marginTop: 30,
        flex: 1,
    },
    content1: {
        marginBottom: 15
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    input: {
        width: '100%',
    },
    contentFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20
    },
})
