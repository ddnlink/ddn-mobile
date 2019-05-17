import { createStackNavigator } from "react-navigation"
import { HomeNavigator } from './home-navigator';

export const RootNavigator = createStackNavigator(
  {
    homeStack: { screen: HomeNavigator }
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
