import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { CENTER_ITEMS } from '../utils/styles'

const SIZE = 100

const PangestureGame = () => {

    const pan = Gesture.Pan()
    .onStart(() => {

    })
    .onUpdate(() => {

    })
    

  return (
    <View style={[styles.container, CENTER_ITEMS]} >
        <GestureDetector gesture={pan}>
            <Animated.View style={styles.square}/>
        </GestureDetector>
    </View>
  )
}

export default PangestureGame

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    square: {
        width: SIZE,
        height: SIZE,
        backgroundColor: 'rgba(0,0,256,0.5)',
        borderRadius: 25
    }

})