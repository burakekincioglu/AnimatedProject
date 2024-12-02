import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CarouselScreen from './Screens/CarouselScreen'
import HomeScreen from './Screens/Home'
import PagingDotsScreen from './Screens/PagingDotsScreen'
const App = () => {
  const RootStack = createNativeStackNavigator({
    screens: {
      Home: {
        screen: HomeScreen,
        options: {
          headerStyle: {
            backgroundColor: '#f4511e'
          }
        }
      },
      PagingDots: {
        screen: PagingDotsScreen,
        options: {
          headerStyle: {
            backgroundColor: 'black'
          }
        }
      },
      Carousel: CarouselScreen
    }
  })

  const Navigation = createStaticNavigation(RootStack)

  return <Navigation />
}

export default App
