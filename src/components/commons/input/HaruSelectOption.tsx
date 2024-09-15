import {StyleSheet, View, Text} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import React from "react";
import {globalStyles} from "../../../constant";
import {IHaruSelectOption} from "../../../types/common";
import {MaterialCommunityIcons} from '@expo/vector-icons';

const HaruSelectOption: React.FC<IHaruSelectOption> = ({
                                                           value,
                                                           items,
                                                       }) => {
    return (
        <View>
            <Text style={pickerSelectStyles.label}>Select Gender:</Text>
            <View style={globalStyles.inputContainer}>
                <View style={pickerSelectStyles.selectContainer}>
                    <MaterialCommunityIcons name="gender-male-female"
                                            size={24} color="black"
                                            style={pickerSelectStyles.icon}
                    />
                    <View style={pickerSelectStyles.optionContainer}>
                        <RNPickerSelect
                            value={value}
                            onValueChange={(value) => console.log(value)}
                            items={items}
                            placeholder={{label: 'Select an option', value: null}}
                            style={pickerSelectStyles}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HaruSelectOption;

const pickerSelectStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        color: '#333',
    },
    selectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 4,
        width: '100%',
    },
    optionContainer: {
        flex: 1,
    },
    icon: {
        marginLeft: 14,
    },
    inputIOS: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 0,
        color: '#000',
        flex: 1,
    },
    inputAndroid: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        color: '#000',
        fontSize: 16,
    },
});