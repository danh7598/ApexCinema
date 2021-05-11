import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { neutral2Color, primaryColor } from '../../strings/colors';
import { sizeFont, sizeHeight, sizeWidth } from '../../utils/Size';
import PropTypes from 'prop-types';

const SignInAndSignUpGroup = ({ onSwitchSign, isSignIn }) => {
    return (
        <View style={styles.viewLoginAndSignUpGroup}>
            <TouchableOpacity
                onPress={onSwitchSign(true)}
                disabled={isSignIn}>
                <Text style={isSignIn
                    ? styles.textSignWhenSelected
                    : styles.textSignWhenNotSelected}>
                    Sign In
                            </Text>
                {isSignIn
                    ? <View style={styles.viewLine} />
                    : <View style={styles.viewLineHide} />}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onSwitchSign(false)}
                disabled={!isSignIn}>
                <Text style={isSignIn
                    ? styles.textSignWhenNotSelected
                    : styles.textSignWhenSelected}>
                    Sign Up
                            </Text>
                {isSignIn
                    ? <View style={styles.viewLineHide} />
                    : <View style={styles.viewLine} />}
            </TouchableOpacity>
        </View>
    );
};


SignInAndSignUpGroup.propTypes = {
    onSwitchSign: PropTypes.func.isRequired,
    isSignIn: PropTypes.bool,
};

SignInAndSignUpGroup.defaultProps = {
    isSignIn: true,
};

export default SignInAndSignUpGroup;

const styles = StyleSheet.create({
    viewLoginAndSignUpGroup: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textSignWhenSelected: {
        fontSize: sizeFont(4.16),
        fontWeight: '700',
        color: primaryColor,
        lineHeight: sizeHeight(4.97)
    },
    textSignWhenNotSelected: {
        marginLeft: sizeWidth(6.4),
        marginRight: sizeWidth(6.4),
        fontSize: sizeFont(2.6),
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
});
