import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, NavigationScreenProp, NavigationRoute, NavigationParams } from "react-navigation"
import { HomeScreen } from "../screens/home-screen"
import { MessageScreen } from "../screens/message-screen"
import { SearchScreen } from "../screens/search-screen"
import { SettingScreen } from "../screens/setting-screen"
import { TaskIconWithBadge } from "../components/TaskIconWithBadge";

function getTabBarIcon({navigation, focused, tintColor} : {
  navigation: NavigationScreenProp < NavigationRoute < NavigationParams >,
  NavigationParams >;
  focused: boolean;
  tintColor: string | null;
}) {
  const {routeName} = navigation.state;
  let IconComponent: any = Ionicons;
  let iconName: string = 'ios-settings';
  if (routeName === 'Home') {
      iconName = `ios-home`;
      // Fixme: 下面的icon不存在，会导致出错
      // iconName = `ios-home-circle${focused ? '' : '-outline'}`;
      // 确保icon存在，参考：https://www.npmjs.com/package/react-native-vector-icons#icon-component

      // Sometimes we want to add badges to some icons. You can check the
      // implementation below.
      IconComponent = TaskIconWithBadge;
  } else if (routeName === 'message') {
      iconName = `ios-apps`;
  } else if (routeName === 'search') {
      iconName = `ios-cube`; 
  }
  
  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor}/>;
}

export const TabNavigator = createBottomTabNavigator({
  home: { screen: HomeScreen },
  message: { screen: MessageScreen },
  search: { screen: SearchScreen },
  setting: { screen: SettingScreen },
}, {
  /**
   * 导入React，不然出现奇葩错误：
   * "Can't find variable: React" in createBottomTabNavigator
   */
  defaultNavigationOptions: ({navigation}) => ({
      // title: "hello", todo: 根据路由修改显示名字
      tabBarIcon: ({focused, tintColor}) => {
        console.log("tabBarIcon")
        return getTabBarIcon({navigation, focused, tintColor});
      }
  }),
  
  tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
  }
});
