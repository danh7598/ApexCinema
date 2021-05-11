import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import IllusOnboarding1 from '../../../assets/IllusOnboarding1.png';
import { sizeHeight, sizeWidth } from '../../utils/Size';
import TextTitle from './TextTitle';
export default class Onboarding1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imgIllus}
                    source={IllusOnboarding1} />
                <TextTitle
                    textBold={'Everything In Your Hand'}
                    textLight={'Let’s book ticket on Nudooz Cinema app to receive special deal'} />
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
        //backgroundColor: 'skyblue',
        top: -sizeHeight(5.2),
        //left: -sizeWidth(6.4)
    }
});
