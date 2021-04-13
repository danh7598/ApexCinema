import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { sizeWidth } from '../utils/Size';

const HeaderBar = () => {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    );
};

export default HeaderBar;

const styles = StyleSheet.create({
    container: {
        width: sizeWidth(100),
        height: sizeHeight(8),
        backgroundColor: 'skyblue',
    }
});
