import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';
import InputContainer from './InputContainer';
import illusBackground from '../../../assets/IllusSignInAndSignUp.jpg';
import { sizeWidth, sizeHeight } from '../../utils/Size';
export default class SignInAndUpScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.imgBackground}
                    source={illusBackground} />
                <InputContainer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgBackground: {
        width: sizeWidth(100),
        height: sizeHeight(81.3),
        position: 'absolute',
        top: -sizeHeight(9.7)
    }
});
