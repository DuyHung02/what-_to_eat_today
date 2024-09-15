import React from "react";
import { TextInput as PaperTextInput } from 'react-native-paper';

export type ISelectOption = {
    label: string;
    value: string | number;
}

export type IHaruSelectOption = {
    value?: string | number;
    items: ISelectOption[];
}

export type IHaruInputText = {
    label?: string;
    value?: string | undefined;
    onChange?: () => void;
    errorMessage?: string | undefined;
} & React.ComponentProps<typeof PaperTextInput>

export type IHaruInputDate = {
    label?: string;
    value?: string | undefined;
    onChange: (date: string) => void;
}

export type IHaruBtnSubmit = {
    label: string;
    onSubmit: () => void;
}
