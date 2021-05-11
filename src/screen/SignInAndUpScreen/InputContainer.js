import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { neutral2Color, neutral3Color, primaryColor } from '../../strings/colors';
import { sizeFont, sizeHeight, sizeWidth } from '../../utils/Size';
import TextField from './TextField';
import Button from '../../common/Button';
import SignInAndSignUpGroup from './SignInAndSignUpGroup';
import InputSignIn from './InputSignIn';
import InputSignUp from './InputSignUp';
export default class InputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true
        };
    }
    switchSignView = (isSignIn) => () => {
        this.setState({ isSignIn: isSignIn });
    };
    onPressButton = () => {
        if (this.state.isSignIn) {
            this.props.navigation.navigate('HomeScreen');
        } else {
            this.props.navigation.navigate('Verification');
        }
    };
    render() {
        //Nếu nhấn vào SignIn thì gửi giá trị true, ngược lại là false
        return (
            <View style={styles.container}>
                <View style={styles.viewInputContainer}>
                    <SignInAndSignUpGroup
                        isSignIn={this.state.isSignIn}
                        onSwitchSign={this.switchSignView} />
                    {this.state.isSignIn
                        ? <InputSignIn />
                        : <InputSignUp />}
                </View>
                <Button
                    onPress={this.onPressButton}
                    styleViewButton={styles.button}
                    textButton={this.state.isSignIn ? 'Sign In' : 'Sign Up'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: sizeHeight(62),
        width: sizeWidth(100),
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: sizeWidth(10.6),
        backgroundColor: '#201F28',
        paddingHorizontal: sizeWidth(6.4),
        paddingTop: sizeHeight(3.6),
        alignItems: 'center',
    },
    viewInputContainer: {
        //borderWidth: 1,

    },

    button: {
        position: 'absolute',
        bottom: sizeHeight(7.0)
    },

});
