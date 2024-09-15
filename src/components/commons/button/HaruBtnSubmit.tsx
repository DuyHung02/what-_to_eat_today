import {View} from "react-native";
import { Button } from 'react-native-paper';
import React from "react";
import {IHaruBtnSubmit} from "../../../types/common";

const HaruBtnSubmit: React.FC<IHaruBtnSubmit> = ({
    label,
    onSubmit,
                                                 }) => {
    return (
        <View>
            <Button mode="contained" onPress={onSubmit}>
                {label}
            </Button>
        </View>
    )
};

export default HaruBtnSubmit;