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
        this.pin1Ref = React.createRef();
        this.pin2Ref = React.createRef();
        this.pin3Ref = React.createRef();
        this.pin4Ref = React.createRef();
    }

    onChangePin1 = (text) => {
        console.log(text)
        if (text == '') {
            this.setState({ pin1: text });
        } else {
            this.setState({ pin1: text }, () => {
                this.pin2Ref.current.focus();
            });
        }
    };

    onChangePin2 = (text) => {
        if (text == '') {
            this.setState({ pin2: text }, () => {
                this.pin1Ref.current.focus();
            });
        } else {
            this.setState({ pin2: text }, () => {
                this.pin3Ref.current.focus();
            });
        }
    };

    onChangePin3 = (text) => {
        if (text == '') {
            this.setState({ pin3: text }, () => {
                this.pin2Ref.current.focus();
            });
        } else {
            this.setState({ pin3: text }, () => {
                this.pin4Ref.current.focus();
            });
        }
    };

    onChangePin4 = (text) => {
        if (text == '') {
            this.setState({ pin4: text }, () => {
                this.pin3Ref.current.focus();
            });
        } else {
            this.setState({ pin4: text });
        }
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
                    <PinCodeInput
                        value={this.state.pin1}
                        onChangeText={(text) => this.onChangePin1(text)}
                        ref={this.pin1Ref} />
                    <PinCodeInput
                        value={this.state.pin2}
                        onChangeText={(text) => this.onChangePin2(text)}
                        ref={this.pin2Ref} />
                    <PinCodeInput
                        value={this.state.pin3}
                        onChangeText={(text) => this.onChangePin3(text)}
                        ref={this.pin3Ref} />
                    <PinCodeInput
                        value={this.state.pin4}
                        onChangeText={(text) => this.onChangePin4(text)}
                        ref={this.pin4Ref} />
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
