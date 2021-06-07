import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderBar from '../../common/HeaderBar'

const VoucherScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <HeaderBar
                leftButton={require("../../../assets/Menu.png")}
                title={"Voucher"}
                onPressLeft={() => {navigation.openDrawer()}}
            
            />
        </View>
    )
}

export default VoucherScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
