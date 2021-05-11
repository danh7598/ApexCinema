import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import Onboarding1 from '../../screen/OnboardingScreen/Onboarding1';
import Onboarding2 from '../../screen/OnboardingScreen/Onboarding2';
import Onboarding3 from '../../screen/OnboardingScreen/Onboarding3';

const OnboardingStack = ({ navigation }) => {
    return (
        // <Stack.Navigator headerMode={"none"} initialRouteName={"SettingScreen"}>
        //     <Stack.Screen name="Onboarding1" component={Onboarding1} />
        //     <Stack.Screen name="Onboarding2" component={Onboarding2} />
        //     <Stack.Screen name="Onboarding3" component={Onboarding3} />
        // </Stack.Navigator>
        <PagerView style={styles.pagerView} initialPage={0}>
            <Onboarding1 key={"1"} />
            <Onboarding2 key={"2"} />
            <Onboarding3 key={"3"} navigation={navigation} />
        </PagerView>
    );
};

export default OnboardingStack;

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    }
});
