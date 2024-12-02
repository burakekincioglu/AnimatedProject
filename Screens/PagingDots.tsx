import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const ACTIVE_COLOR = '#66e070'

const PagingDots = () => {


  return (
    <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <Text>PagingDots</Text>
    </View>
  )
}

export default PagingDots

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'black'
    }
})