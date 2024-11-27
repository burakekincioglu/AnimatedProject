import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CarouselScreen from './Screens/CarouselScreen'
import HomeScreen from './Screens/Home'

const App = () => {
  const RootStack = createNativeStackNavigator({
    screens: {
      Home: HomeScreen,
      Carousel: CarouselScreen
    }
  })

  const Navigation = createStaticNavigation(RootStack)

  return <Navigation />
}

export default App
