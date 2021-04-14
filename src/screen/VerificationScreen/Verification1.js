import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import back from '../../../assets/Back.png'
import Button from '../../common/Button';
import HeaderBar from '../../common/HeaderBar';
import { neutral3Color } from '../../strings/colors';
import { sizeFont, sizeHeight, sizeWidth } from '../../utils/Size';
import smile_face from '../../../assets/smile-face-verification.png'
export default class Verification1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderBar
                    leftButton={back}
                    title={'Verification'} />
                <Text style={styles.textVerify}>Verify with Phone</Text>
                <Button
                    styleViewButton={styles.button}
                    textButton={"Send Code"}
                />
                <Text style={styles.textHold}>Or hold to complete your order</Text>
                <Image
                    style={styles.imgFace}
                    source={smile_face} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    textVerify: {
        fontSize: sizeFont(4.2),
        fontWeight: '400',
        color: neutral3Color,
        textAlign: 'center',
        marginTop: sizeHeight(15.4)
    },
    button: {
        width: sizeWidth(46.6),
        marginTop: sizeHeight(5.2)
    },
    textHold: {
        fontSize: sizeFont(4.2),
        fontWeight: '400',
        color: neutral3Color,
        textAlign: 'center',
        marginTop: sizeHeight(13)
    },
    imgFace: {
        width: sizeWidth(17),
        height: sizeWidth(17),
        marginTop: sizeHeight(5.2)
    }
});
