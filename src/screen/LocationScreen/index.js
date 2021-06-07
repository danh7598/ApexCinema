import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderBar from '../../common/HeaderBar'

const LocationScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <HeaderBar
                leftButton={require("../../../assets/Menu.png")}
                title={"Location"}
                onPressLeft={() => {navigation.openDrawer()}}
            
            />
        </View>
    )
}

export default LocationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
