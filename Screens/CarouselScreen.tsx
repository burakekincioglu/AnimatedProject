import * as React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';

function CarouselScreen() {
  const width = Dimensions.get('window').width;
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ScrollView>
        <View
          style={styles.container}>
          <Carousel
            style={{marginHorizontal: 16}}
            loop
            panGestureHandlerProps={{
              activeOffsetX: [-10, 10],
            }}
            width={width}
            height={width / 2}
            autoPlay={false}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            onSnapToItem={index => console.log('current index:', index)}
            renderItem={({index}) => (
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 16,
                  borderWidth: 1,
                  borderRadius: 15,
                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center', fontSize: 30}}>{index}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

export default CarouselScreen;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        height: 500,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
      }
})
