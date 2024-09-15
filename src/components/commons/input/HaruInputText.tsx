import {View, StyleSheet, Text} from "react-native";
import {TextInput} from "react-native-paper";
import React from "react";
import {globalStyles} from "../../../constant";
import {IHaruInputText} from "../../../types/common";

const HaruInputText: React.FC<IHaruInputText> = ({
                                                     label,
                                                     value,
    onChange,
    error,
    errorMessage,
                                                 }) => {
    return (
        <View style={globalStyles.inputContainer}>
            <TextInput label={label}
                       value={value}
                       error={error}
                       onChangeText={onChange}
                       mode="outlined"
                       left={<TextInput.Icon icon="phone"/>}
                       style={styles.input}
            />
            {errorMessage ?
                <Text style={globalStyles.errorMessage}>
                    {errorMessage}
                </Text> : null
            }
        </View>
    )
}

export default HaruInputText;

const styles = StyleSheet.create({
    input: {
        width: '100%',
    }
})