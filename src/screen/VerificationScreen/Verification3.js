import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import back from '../../../assets/Back.png';
import Button from '../../common/Button';
import HeaderBar from '../../common/HeaderBar';
import { neutral3Color, primaryColor } from '../../strings/colors';
import { sizeFont, sizeHeight, sizeWidth } from '../../utils/Size';
import smile_face from '../../../assets/smile-face-verification.png';
import TextField from '../SignInAndUpScreen/TextField';
export default class Verification3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneValue: ''
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
                <TextField
                    value={this.state.phoneValue}
                    onChangeText={(text) => this.onChangePhone(text)}
                    placeholder={"Enter phone number"}
                    keyboardType={'phone-pad'}
                    styleView={styles.viewInput} />
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
    viewInput: {
        marginTop: sizeHeight(7.03)
    },
    button: {
        position: 'absolute',
        bottom: sizeHeight(7.03)
    },

});
