import React from 'react'
import { StatusBar, StyleSheet, useWindowDimensions, View } from 'react-native'
import Animated, { useAnimatedRef, useDerivedValue, useScrollViewOffset } from 'react-native-reanimated'
import PagingDots from '../components/PagingDots'

const ACTIVE_COLOR = '#66e070'
const DOTS_COUNT = 3

const PagingDotsScreen = () => {

  const {width, height} = useWindowDimensions()

  const scrollAnimatedRef = useAnimatedRef<Animated.ScrollView>()
  const scrollOffset = useScrollViewOffset(scrollAnimatedRef)

  const activeIndex = useDerivedValue(() => {
    return Math.round(scrollOffset.value / (width*0.8))
  })

  return (
    <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <Animated.ScrollView
            ref={scrollAnimatedRef} 
            horizontal 
            decelerationRate={'fast'} 
            snapToInterval={width*0.8}
            style={{marginLeft: width*0.1}}
        >
            {new Array(DOTS_COUNT).fill(0).map((_, index) => {
            return <View 
                        key={index} 
                        style={[styles.slideContainer,
                                {width: width*0.8,
                                height: height*0.5,
                                opacity: index*0.3 + 0.1,
                                marginRight: width*0.1
                                }]}
                    />
            })}
        </Animated.ScrollView>
        <View style={styles.dotsContainer}>
            <PagingDots count={DOTS_COUNT} activeIndex={activeIndex}/>
        </View>
    </View>
  )
}

export default PagingDotsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'black'
    },
    slideContainer: {
        backgroundColor: 'white',
    },
    dotsContainer: {
        position: "absolute"
    }
})