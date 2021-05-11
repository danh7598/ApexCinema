import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import IllusOnboarding2 from '../../../assets/IllusOnboarding2.png';
import { primaryColor } from '../../strings/colors';
import { sizeHeight, sizeWidth } from '../../utils/Size';
import TextTitle from './TextTitle';
export default class Onboarding2 extends Component {
    render() {
        return (
            <View
                collapsable={false}
                style={styles.container}>
                <Image
                    style={styles.imgIllus}
                    source={IllusOnboarding2} />
                <TextTitle
                    textBold={'Easy To Use'}
                    textLight={'Nudooz Cinema app is great in design and incredibly simple to use'} />
                <View style={styles.viewPoint}>
                    <View style={styles.longPoint} />
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
        // backgroundColor: 'skyblue',
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
        width: sizeWidth(17.6),
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
