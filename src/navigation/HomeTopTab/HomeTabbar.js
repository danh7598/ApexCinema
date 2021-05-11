import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { neutral3Color, primaryColor } from '../../strings/colors';
import { sizeFont, sizeHeight, sizeWidth } from '../../utils/Size';

const HomeTabbar = ({ state, descriptors, navigation, position }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index.toString()}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabItem}
                    >
                        <Text style={isFocused ? styles.textTitleFocus : styles.textTitleNotFocus}>
                            {label}
                        </Text>
                        {isFocused && <View style={styles.viewLine} />}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default HomeTabbar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'skyblue',
        paddingHorizontal: sizeWidth(6.4)
    },
    tabItem: {
        // backgroundColor: 'skyblue'
        marginTop: sizeHeight(1.04)
    },
    textTitleFocus: {
        fontSize: sizeFont(2.09),
        fontWeight: '600',
        color: primaryColor
    },
    textTitleNotFocus: {
        fontSize: sizeFont(1.83),
        fontWeight: '400',
        color: neutral3Color
    },
    viewLine: {
        marginTop: sizeHeight(0.52),
        width: sizeWidth(17.06),
        height: 2,
        backgroundColor: primaryColor
    }
});
