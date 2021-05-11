import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import IllusOnboarding3 from '../../../assets/IllusOnboarding3.png';
import Button from '../../common/Button';
import { primaryColor } from '../../strings/colors';
import { sizeFont, sizeHeight, sizeWidth } from '../../utils/Size';
import TextTitle from './TextTitle';
import arrow_next from '../../../assets/Arrow-Next.png';
const Onboarding3 = ({ navigation }) => {
    const onPressStarted = () => {
        navigation.navigate('SignInScreen');
    };
    return (
        <View
            collapsable={false}
            style={styles.container}>
            <Image
                style={styles.imgIllus}
                source={IllusOnboarding3} />
            <View style={styles.viewTextWelcome}>
                <Text style={styles.textWelcome}>WELCOME TO</Text>
                <Text style={styles.textNuddoz}>NUDDOZ</Text>
            </View>
            <TextTitle
                styleView={styles.textTitle}
                textBold={'Let’s Start With Us'}
                textLight={'Nudooz Cinema app is great in design and incredibly simple to use'} />
            <Button
                onPress={onPressStarted}
                styleViewButton={styles.button}
                textButton={'Get Started'}
                imgSource={arrow_next} />
        </View>
    );
};

export default Onboarding3;

const styles = StyleSheet.create({
    container: {
        width: sizeWidth(100),
        height: sizeHeight(100),
        alignItems: 'center'
    },
    imgIllus: {
        width: sizeWidth(100),
        height: sizeHeight(70),
        position: 'absolute',
        resizeMode: 'stretch',
        //backgroundColor: 'skyblue',
        top: -sizeHeight(5.2),
        //left: -sizeWidth(6.4)
    },
    viewTextWelcome: {
        width: sizeWidth(38.6),
        height: sizeHeight(8.4),
        position: 'absolute',
        //backgroundColor: 'skyblue',
        alignItems: 'center',
        left: sizeWidth(33.8),
        //marginLeft: sizeWidth(4.5),
        top: sizeHeight(27.21)
    },
    textWelcome: {
        fontSize: sizeFont(2.08),
        fontWeight: '700',
        color: '#201F28',
        textAlign: 'center'
    },
    textNuddoz: {
        fontSize: sizeFont(4.16),
        fontWeight: '700',
        color: primaryColor,
        textAlign: 'center'
    },
    button: {
        position: 'absolute',
        bottom: sizeHeight(6.77)
    },

});
