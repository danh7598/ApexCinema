import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { neutral3Color, neutral4Color } from '../../strings/colors';
import { sizeFont, sizeHeight, sizeWidth } from '../../utils/Size';

const TextTitle = ({textBold, textLight, styleView}) => {
    return (
        <View style={[styles.container, styleView]}>
            <Text style={styles.textBold}>{textBold}</Text>
            <Text style={styles.textLight}>{textLight}</Text>
        </View>
    )
}

export default TextTitle

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: sizeWidth(73.3),
        alignSelf: 'center',
        marginTop: sizeHeight(68.4)
    },
    textBold: {
        fontWeight: '700',
        fontSize: sizeFont(5.3),
        color: neutral4Color
    },
    textLight: {
        marginTop: sizeHeight(2.08),
        fontWeight: '400',
        fontSize: sizeFont(4.2),
        color: neutral3Color,
        textAlign: 'center'
    }
})
