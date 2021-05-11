import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { sizeFont, sizeHeight, sizeWidth } from '../../utils/Size';
import cocoImage from '../../../assets/CocoImage.png';
import { neutral3Color, neutral4Color } from '../../strings/colors';
import Button from '../../common/Button';
const NowShowingScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.viewGroupCenter}>
                <View style={styles.imgBack}>

                </View>
                <Image
                    source={cocoImage}
                    style={styles.imgAhead}
                />
                <View style={styles.viewText}>
                    <Text style={styles.textMovie}>
                        COCO
                </Text>
                    <Text style={styles.textDate}>
                        120 minutes - 04.23.2020
                </Text>
                </View>
            </View>
            <Button
                textButton={"Book Ticket"}
                styleViewButton={styles.button}
            />
        </View>
    );
};

export default NowShowingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'skyblue'
    },
    viewGroupCenter: {
        width: sizeWidth(87.2),
        height: sizeHeight(65.625),
        alignSelf: 'center',
        paddingHorizontal: sizeWidth(6.4),
        // backgroundColor: 'skyblue',
        borderRadius: sizeWidth(4.2),
        marginTop: sizeHeight(3.64)
    },
    imgAhead: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: sizeWidth(81.86),
        height: sizeHeight(55.72),
        borderRadius: sizeWidth(4.2),
        // resizeMode: "contain",
    },
    imgBack: {
        position: 'absolute',
        top: sizeHeight(2.6),
        right: 0,
        backgroundColor: 'rgba(42, 41, 55, 1)',
        width: sizeWidth(71.46),
        height: sizeHeight(50.52),
        borderRadius: sizeWidth(4.2),

    },
    textMovie: {
        textAlign: 'center',
        marginTop: sizeHeight(2.6),
        fontSize: sizeFont(2.6),
        fontWeight: '700',
        color: neutral4Color
    },
    textDate: {
        textAlign: 'center',
        marginTop: sizeHeight(1.04),
        fontSize: sizeFont(2.09),
        fontWeight: '400',
        color: neutral3Color
    },
    viewText: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0
    },
    button: {
        marginTop: sizeHeight(3.25),
        width: sizeWidth(46.6),
        alignSelf: 'center',
    }
});
