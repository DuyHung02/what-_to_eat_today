import {Button, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {globalStyles} from "../../../constant";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {TextInput} from "react-native-paper";
import {IHaruInputDate} from "../../../types/common";

const HaruInputDate: React.FC<IHaruInputDate> = ({
    label,
    value,
                                                 }) => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    // Hàm format theo yyyy/mm/dd
    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    };

    return (
        <View style={globalStyles.inputContainer}>
            <TouchableOpacity onPress={() => setOpen(true)}>
                <TextInput
                    value={value}
                    label={label}
                    mode="outlined"
                    left={<TextInput.Icon icon="cake-variant" />}
                    style={styles.input}
                    editable={false}
                />
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={open}
                mode="date"
                onConfirm={(date) => {
                    setDate(date);
                    setOpen(false);
                }}
                onCancel={() => setOpen(false)}
            />
        </View>
    )
};

export default HaruInputDate;

const styles = StyleSheet.create({
    input: {
        width: '100%',
    }
})