import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { neutral2Color, neutral3Color, primaryColor } from '../../strings/colors';
import { sizeFont, sizeHeight, sizeWidth } from '../../utils/Size';
import TextField from './TextField';
import eye from '../../../assets/B-preview.png';
import Button from '../../common/Button';
export default class LoginGroup extends Component {
    render() {
        //Nếu nhấn vào SignIn thì gửi giá trị 1, ngược lại là 0
        return (
            <View style={styles.container}>
                <View style={styles.viewInputContainer}>
                    <View style={styles.viewLoginAndSignUpGroup}>
                        <TouchableOpacity
                            onPress={this.props.onSwitchSign(1)}
                            disabled={this.props.isSignIn}>
                            <Text style={this.props.isSignIn
                                ? styles.textSignWhenSelected
                                : styles.textSignWhenNotSelected}>
                                Sign In
                            </Text>
                            {this.props.isSignIn
                                ? <View style={styles.viewLine} />
                                : <View style={styles.viewLineHide} />}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.props.onSwitchSign(0)}
                            disabled={!this.props.isSignIn}>
                            <Text style={this.props.isSignIn
                                ? styles.textSignWhenNotSelected
                                : styles.textSignWhenSelected}>
                                Sign Up
                            </Text>
                            {this.props.isSignIn
                                ? <View style={styles.viewLineHide} />
                                : <View style={styles.viewLine} />}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewInput}>
                        <TextField value={'danh7598@gmail.com'} />
                        <TextField
                            icon={eye}
                            value={'danhyui123'}
                            secureTextEntry={true}
                            styleView={styles.textFieldPassword} />
                        <TouchableOpacity>
                            <Text style={styles.textForgotPassword}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Button
                    styleViewButton={styles.button}
                    textButton={'Sign In'} />
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
    viewLoginAndSignUpGroup: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textSignWhenSelected: {
        fontSize: sizeFont(8.5),
        fontWeight: '700',
        color: primaryColor,
        lineHeight: sizeHeight(4.97)
    },
    textSignWhenNotSelected: {
        marginLeft: sizeWidth(6.4),
        marginRight: sizeWidth(6.4),
        fontSize: sizeFont(5.3),
        fontWeight: '500',
        color: neutral2Color,
        lineHeight: sizeHeight(4.97)
    },
    viewLine: {
        height: 4,
        width: sizeWidth(17),
        backgroundColor: primaryColor,
        borderRadius: 2,
        marginTop: sizeHeight(1)
    },
    viewLineHide: {
        height: 4,
        width: sizeWidth(17),
        //backgroundColor: primaryColor,
        borderRadius: 2,
        marginTop: sizeHeight(1)
    },
    viewInput: {
        marginTop: sizeHeight(4.1)
    },
    textFieldPassword: {
        marginTop: sizeHeight(2.6)
    },
    button: {
        position: 'absolute',
        bottom: sizeHeight(7.4)
    },
    textForgotPassword: {
        fontSize: sizeFont(3.7),
        fontWeight: '400',
        color: neutral3Color,
        alignSelf: 'flex-end',
        marginTop: sizeHeight(1.56)
    }
});
