import React, { forwardRef } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { primaryColor } from '../../strings/colors';
import { sizeFont, sizeWidth } from '../../utils/Size';

const PinCodeInput = forwardRef((props, ref) => {
    return (
        <TextInput
            ref={ref}
            {...props}
            maxLength={1}
            keyboardType={"numeric"}
            style={styles.textInput} />
    )
})

export default PinCodeInput;
const styles = StyleSheet.create({
    textInput: {
        width: sizeWidth(16),
        height: sizeWidth(16),
        backgroundColor: '#2A2937',
        borderRadius: sizeWidth(4.2),
        color: primaryColor,
        fontSize: sizeFont(6.4),
        fontWeight: '700',
        textAlign: 'center',
        marginRight: sizeWidth(4.2)
    }
});
