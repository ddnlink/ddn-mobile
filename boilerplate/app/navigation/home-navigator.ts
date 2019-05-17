import { createStackNavigator } from "react-navigation"
import { ExampleNavigator } from "./example-navigator"
import { TabNavigator } from './tab-navigator';

export const HomeNavigator = createStackNavigator({
  tabNavigator: { screen: TabNavigator },
  example: { screen: ExampleNavigator },
},
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)