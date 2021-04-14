import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { neutral2Color, neutral3Color } from '../../strings/colors';
import { sizeFont, sizeHeight } from '../../utils/Size';
import eye from '../../../assets/B-preview.png';
import TextField from './TextField';


class InputSignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailValue: '',
            passwordValue: '',
            rePasswordValue: '',
            hidePassword: true,
            hideRePassword: true
        };
    }

    onChangeEmail = (text) => {
        this.setState({ emailValue: text });
    };

    onChangePassword = (text) => {
        this.setState({ passwordValue: text });
    };

    onChangeRePassword = (text) => {
        this.setState({ rePasswordValue: text });
    }

    hidePassword = () => {
        this.setState({ hidePassword: !this.state.hidePassword})
    }

    hideRePassword = () => {
        this.setState({ hideRePassword: !this.state.hideRePassword });
    }

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
                    onPressIcon={this.hidePassword}
                    value={this.state.passwordValue}
                    secureTextEntry={this.state.hidePassword}
                    styleView={styles.textFieldPassword} />
                <TextField
                    icon={eye}
                    
                    onChangeText={(text) => this.onChangeRePassword(text)}
                    placeholder={"Enter re-password"}
                    value={this.state.rePasswordValue}
                    onPressIcon={this.hideRePassword}
                    secureTextEntry={this.state.hidePassword}
                    styleView={styles.textFieldPassword} />
            </View>
        );
    }
}

export default InputSignUp;

const styles = StyleSheet.create({
    viewInput: {
        marginTop: sizeHeight(4.1)
    },
    textFieldPassword: {
        marginTop: sizeHeight(2.6)
    },
    textForgotPassword: {
        fontSize: sizeFont(3.7),
        fontWeight: '400',
        color: neutral3Color,
        alignSelf: 'flex-end',
        marginTop: sizeHeight(1.56)
    }
});

