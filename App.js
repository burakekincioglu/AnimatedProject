import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CarouselScreen from './Screens/CarouselScreen'

const RootStack = createNativeStackNavigator({
  screens: {
    Carousel: CarouselScreen
  }
})

const Navigation = createStaticNavigation(RootStack)

const App = () => {
  return <Navigation />
}

export default App
