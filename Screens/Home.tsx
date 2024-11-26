import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
        <Text>Home</Text>
        <Button
        title='Carousel'
        color={'gray'} 
        onPress={() => navigation.navigate('Carousel')}
        />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {justifyContent: "center", alignItems: "center"}
})