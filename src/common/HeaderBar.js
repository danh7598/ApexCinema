import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { sizeHeight, sizeWidth } from '../utils/Size';
import back from '../../assets/Back.png';
const HeaderBar = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imgLeft}
                source={back} />
        </View>
    );
};

export default HeaderBar;

const styles = StyleSheet.create({
    container: {
        width: sizeWidth(100),
        height: sizeHeight(8),
        backgroundColor: 'skyblue',
    },
    imgLeft: {
        width: sizeWidth(4),
        height: sizeWidth(4)
    }
});
