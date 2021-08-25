import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TrendingRecipesScreen = () => {
    return (
        <View style={styles.container}>
            <Text>TrendingRecipesScreen</Text>
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
export default TrendingRecipesScreen
