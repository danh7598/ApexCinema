import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { backgroundColor } from '../../strings/colors';
import { sizeFont, sizeHeight, sizeWidth } from '../../utils/Size';

class TextField extends Component {
    render() {
        return (
            <View style={[styles.viewTextInput, this.props.styleView]}>
                <TextInput
                    {...this.props}
                    style={styles.textInput}>
                </TextInput>
                <TouchableOpacity>
                    <Image
                        style={styles.imgButton}
                        source={this.props.icon} />
                </TouchableOpacity>
            </View>
        )
    }
}

export default TextField;

const styles = StyleSheet.create({
    viewTextInput: {
        width: sizeWidth(87.2),
        height: sizeHeight(6.25),
        paddingLeft: sizeWidth(5.3),
        paddingRight: sizeWidth(4.2),
        borderRadius: 16,
        alignItems: 'center',
        backgroundColor: backgroundColor,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        fontSize: sizeFont(4.2),
        color: 'white',
        fontWeight: '500'
    },
    imgButton: {
        height: sizeHeight(5.3),
        width: sizeWidth(5.3),
        resizeMode: 'contain',
        tintColor: '#444444'
    }
});
