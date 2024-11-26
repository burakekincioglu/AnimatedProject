import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
      title='Carousel'
      color={'gray'} 
      onPress={() => console.log("bune")}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {justifyContent: "center", alignItems: "center"}
})