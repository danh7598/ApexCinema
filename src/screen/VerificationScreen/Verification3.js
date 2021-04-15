import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import back from '../../../assets/Back.png';
import Button from '../../common/Button';
import HeaderBar from '../../common/HeaderBar';
import { neutral3Color, primaryColor } from '../../strings/colors';
import { sizeFont, sizeHeight, sizeWidth } from '../../utils/Size';
import smile_face from '../../../assets/smile-face-verification.png';
import TextField from '../SignInAndUpScreen/TextField';
import PinCodeInput from './PinCodeInput';
export default class Verification3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin1: '',
            pin2: '',
            pin3: '',
            pin4: ''
        };
    }

    onChangePhone = (text) => {
        this.setState({ phoneValue: text });
    };

    render() {
        return (
            <View style={styles.container}>
                <HeaderBar
                    leftButton={back}
                    title={'Verification'} />
                <Text style={styles.textTypeCode}>
                    Please type the vertified code that has been sent to
                    {<Text style={styles.textPhone}> (+1) 280 437 4729</Text>}
                </Text>
                <View style={styles.viewPinCode}>
                    <PinCodeInput />
                    <PinCodeInput />
                    <PinCodeInput />
                    <PinCodeInput />
                </View>
                <View style={styles.viewReSend}>
                    <Text style={styles.textDidnotReceive}>I didn't recieve a code?</Text>
                    <TouchableOpacity>
                        <Text style={styles.textResend}>Resend</Text>   
                    </TouchableOpacity>
                    
                </View>
                <Button
                    styleViewButton={styles.button}
                    textButton={"Next"}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    textTypeCode: {
        marginHorizontal: sizeWidth(9.8),
        fontSize: sizeFont(4.2),
        fontWeight: '400',
        color: neutral3Color,
        textAlign: 'center',
        marginTop: sizeHeight(2.6)
    },
    textPhone: {
        fontSize: sizeFont(4.2),
        fontWeight: '400',
        color: primaryColor,
        textAlign: 'center',
        marginTop: sizeHeight(2.6)
    },
    viewPinCode: {
        marginTop: sizeHeight(7.03),
        flexDirection: 'row',
    },
    viewReSend: {
        marginTop: sizeHeight(3.6),
        width: sizeWidth(100),
        paddingHorizontal: sizeWidth(6.4),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textDidnotReceive: {
        fontWeight: '400',
        fontSize: sizeFont(3.73),
        color: neutral3Color
    },
    textResend: {
        fontWeight: '400',
        fontSize: sizeFont(3.73),
        color: primaryColor
    },
    button: {
        position: 'absolute',
        bottom: sizeHeight(7.03)
    },

});
