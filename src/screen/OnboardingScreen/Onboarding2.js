import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import IllusOnboarding2 from '../../../assets/IllusOnboarding2.png';
import { sizeHeight, sizeWidth } from '../../utils/Size';
import TextTitle from './TextTitle';
export default class Onboarding2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imgIllus}
                    source={IllusOnboarding2} />
                <TextTitle
                    textBold={'Easy To Use'}
                    textLight={'Nudooz Cinema app is great in design and incredibly simple to use'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgIllus: {
        width: sizeWidth(100),
        height: sizeHeight(70),
        position: 'absolute',
        resizeMode: 'stretch',
       // backgroundColor: 'skyblue',
        top: -sizeHeight(5.2),
        //left: -sizeWidth(6.4)
    }
});
