import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { primaryColor } from '../../strings/colors'
import { sizeFont, sizeHeight, sizeWidth } from '../../utils/Size'

const DrawerItemComponent = ({text, image, onPress, index}) => {
    return (
        <TouchableRipple style={[styles.container, {backgroundColor: index ? "#4B3A29" : null}]} onPress={onPress} index={index}>
            <>
            <Image style={[styles.icon, {tintColor: index ? primaryColor : "white"}]} source={image} />
                <Text style={[styles.text, {color: index ? primaryColor : "white"}]}>{text}</Text>
                </>
        </TouchableRipple>
    )
}

export default DrawerItemComponent

const styles = StyleSheet.create({
    container: {
        width: sizeWidth(41.06),
        height: sizeHeight(5.2),
        borderTopRightRadius: sizeWidth(3.2),
        borderBottomRightRadius: sizeWidth(3.2),
        flexDirection: "row",
        marginTop: sizeHeight(3),
        paddingHorizontal: sizeWidth(6.4),
        // backgroundColor: "yellow",
        alignItems: "center"
    },
    icon: {
        width: sizeWidth(6.4),
        height: sizeWidth(6.4),
        resizeMode: "contain",
        tintColor: "white",
        marginRight: sizeWidth(3.2)
    },
    text: {
        fontSize: sizeFont(2.08),
        fontWeight: "600",
        color: "white"
    }
})
