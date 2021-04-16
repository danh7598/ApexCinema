import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { neutral1Color, primaryColor } from '../strings/colors';
import { sizeFont, sizeHeight, sizeWidth } from '../utils/Size';

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity
                {...this.props}
                style={[styles.viewButton, this.props.styleViewButton]}>
                <Text style={styles.textButton}>
                    {this.props.textButton}
                </Text>
                {this.props.imgSource &&
                    <Image
                        style={styles.imgButton}
                        source={this.props.imgSource} />}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    viewButton: {
        height: sizeHeight(6.25),
        width: sizeWidth(87.2),
        backgroundColor: primaryColor,
        borderRadius: sizeWidth(4.2),
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: sizeFont(4.2),
        color: neutral1Color,
        fontWeight: '700'
    },
    imgButton: {
        position: 'absolute',
        width: sizeWidth(6.4),
        height: sizeWidth(6.4),
        tintColor: neutral1Color,
        right: sizeWidth(4.2)
    }
});
