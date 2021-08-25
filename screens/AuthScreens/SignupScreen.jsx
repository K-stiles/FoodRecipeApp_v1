import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SignupScreen = () => {
    return (
        <View style={styles.container}>
            <Text>SignupScreen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
export default SignupScreen
