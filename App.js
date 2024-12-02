import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CarouselScreen from './Screens/CarouselScreen'
import HomeScreen from './Screens/Home'
import PagingDots from './Screens/PagingDots'

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
      Carousel: CarouselScreen,
      PagingDots: {
        screen: PagingDots,
        options: {
          headerStyle: {
            backgroundColor: 'black'
          }
        }
      }
    }
  })

  const Navigation = createStaticNavigation(RootStack)

  return <Navigation />
}

export default App
