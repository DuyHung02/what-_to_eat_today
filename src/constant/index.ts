import { StyleSheet } from 'react-native';
export const OPEN_SANS_REGULAR = 'OpenSans-Regular'

export const globalStyles = StyleSheet.create({
    globalFont: {
        fontFamily: OPEN_SANS_REGULAR,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    inputContainer: {
        width: '100%',
        minHeight: 50,
        height: 'auto',
        marginBottom: 15,
    },
    errorMessage: {
        color: 'red',
        fontSize: 12
    },
})