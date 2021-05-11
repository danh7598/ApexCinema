import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import IllusOnboarding1 from '../../../assets/IllusOnboarding1.png';
import { primaryColor } from '../../strings/colors';
import { sizeHeight, sizeWidth } from '../../utils/Size';
import TextTitle from './TextTitle';
export default class Onboarding1 extends Component {
    render() {
        return (
            <View
                collapsable={false}
                style={styles.container}>
                <Image
                    style={styles.imgIllus}
                    source={IllusOnboarding1} />
                <TextTitle
                    textBold={'Everything In Your Hand'}
                    textLight={'Let’s book ticket on Nudooz Cinema app to receive special deal'} />
                <View style={styles.viewPoint}>
                    <View style={styles.longPoint} />
                    <View style={styles.circlePoint} />
                    <View style={styles.circlePoint} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: sizeWidth(100),
        height: sizeHeight(100)
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
    viewPoint: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: sizeHeight(9.375)
    },
    longPoint: {
        width: sizeWidth(9.06),
        height: sizeHeight(1.04),
        borderRadius: sizeWidth(1.06),
        backgroundColor: primaryColor
    },
    circlePoint: {
        width: sizeHeight(1.04),
        height: sizeHeight(1.04),
        borderRadius: sizeHeight(1.04) / 2,
        backgroundColor: 'white',
        marginLeft: sizeWidth(2.13)
    }
});
