import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import LoginGroup from './LoginGroup';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
             isSignIn: true
        }
    }

    switchSignView = (isSignIn) => () => {
        this.setState({ isSignIn: isSignIn})
    }
    
    render() {
        return (
            <View style={styles.container}>
                <LoginGroup
                    onSwitchSign={this.switchSignView}
                    isSignIn={this.state.isSignIn} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
