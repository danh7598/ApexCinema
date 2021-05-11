import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { neutral2Color, neutral3Color } from '../../strings/colors';
import { sizeFont, sizeHeight } from '../../utils/Size';
import eye from '../../../assets/B-preview.png';
import TextField from './TextField';


class InputSignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailValue: '',
            passwordValue: '',
        };
    }

    onChangeEmail = (text) => {
        this.setState({ emailValue: text });
    };

    onChangePassword = (text) => {
        this.setState({ passwordValue: text });
    };

    render() {
        return (
            <View style={styles.viewInput}>
                <TextField
                    placeholder={"Enter email"}
                    onChangeText={(text) => this.onChangeEmail(text)}
                    keyboardType="email-address"
                    value={this.state.emailValue} />
                <TextField
                    icon={eye}
                    onChangeText={(text) => this.onChangePassword(text)}
                    placeholder={"Enter password"}
                    value={this.state.passwordValue}
                    secureTextEntry={true}
                    styleView={styles.textFieldPassword} />
                <TouchableOpacity>
                    <Text style={styles.textForgotPassword}>
                        Forgot Password?
                </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default InputSignIn;

const styles = StyleSheet.create({
    viewInput: {
        marginTop: sizeHeight(4.1)
    },
    textFieldPassword: {
        marginTop: sizeHeight(2.6)
    },
    textForgotPassword: {
        fontSize: sizeFont(1.83),
        fontWeight: '400',
        color: neutral3Color,
        alignSelf: 'flex-end',
        marginTop: sizeHeight(1.56)
    }
});

