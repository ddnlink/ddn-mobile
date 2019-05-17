import * as React from "react"
import { View, ViewStyle, Text } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';

export interface IconWithBadgeProps {
  /**
   * name which is looked up via i18n.
   */
  name: string

  /**
   * The badgeCount to display
   */
  badgeCount?: number

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle

  size?: number
  color?: string
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function IconWithBadge(props: IconWithBadgeProps) {
  // grab the props
  const { name, badgeCount, style, size, color, ...rest } = props

  return (
    <View style={style} {...rest}>
      <Ionicons name={name} size={size} color={color}/> 
        {/**
          `&&` 前面不能是变量，必须保证是条件表达式，不然报如下错误：
          “Text strings must be rendered within a <Text> component”
          参考: https://github.com/facebook/react-native/issues/20084
        */}
        { badgeCount > 0 && (
            <View style={{
                // If you're using react-native < 0.57 overflow outside of the parent
                // will not work on Android, see https://git.io/fhLJ8
                position: 'absolute',
                right: -6,
                top: -3,
                backgroundColor: 'red',
                borderRadius: 6,
                width: 12,
                height: 12,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{badgeCount}</Text>
            </View>
        )}
    </View>
  )
}
