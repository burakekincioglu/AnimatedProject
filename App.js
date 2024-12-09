import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import DoubleTapLikeGesture from './Screens/DoubleTapLikeGesture'
import ExploreInterpolate from './Screens/ExploreInterpolate'
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
        },
        initialParams: { dotSize: 10 }
      },
      ExploreInterpolate: {
        screen: ExploreInterpolate
      },
      DoubleTapLikeGesture: {
        screen: DoubleTapLikeGesture
      }
    }
  })

  const Navigation = createStaticNavigation(RootStack)

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
    </GestureHandlerRootView>
  )
}

export default App
