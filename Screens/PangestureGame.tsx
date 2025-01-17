import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { CENTER_ITEMS } from '../utils/styles'

const SIZE = 80
const CIRCLE_RADIOUS = SIZE * 2

interface Context {
    translationX: number
}

const PangestureGame = () => {

    
      const { width, height } = Dimensions.get('screen');

      const translationX = useSharedValue(0);
      const translationY = useSharedValue(0);
      const prevTranslationX = useSharedValue(0);
      const prevTranslationY = useSharedValue(0);
      

    const pan = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      prevTranslationX.value = translationX.value;
      prevTranslationY.value = translationY.value;
    })
    .onUpdate((event) => {
      console.log(translationX.value, translationY.value);
      
      const distance = Math.sqrt(translationX.value ** 2 + translationY.value ** 2)
      if (distance > CIRCLE_RADIOUS - SIZE / 2 - 5) {
        prevTranslationX.value = translationX.value
        prevTranslationY.value = translationY.value
      }else{
        translationX.value = prevTranslationX.value + event.translationX
        translationY.value = prevTranslationY.value + event.translationY
      }
      
    }).
    onEnd(() => {        
        translationX.value = withSpring(0)
        translationY.value =  withSpring(0)
    })

    const rSquareStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateX: translationX.value
            },
            {
                translateY: translationY.value
            }]
        }
    })
    

  return (
    <View style={[styles.container, CENTER_ITEMS]} >
        <GestureDetector gesture={pan}>
          <View style={[styles.circle, CENTER_ITEMS]} >
            <Animated.View style={[styles.square, rSquareStyle]}/>
          </View>
        </GestureDetector>
    </View>
  )
}

export default PangestureGame

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    square: {
        width: SIZE,
        height: SIZE,
        backgroundColor: '#C70A0C',
        borderRadius: SIZE
    },
    circle: {
      width: CIRCLE_RADIOUS * 2,
      height: CIRCLE_RADIOUS * 2,
      borderRadius: CIRCLE_RADIOUS,
      borderColor: 'rgba(0,0,256,0.5)',
      borderWidth: 5
    }

})